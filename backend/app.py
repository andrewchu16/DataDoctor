from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/doctor_patient_db"
mongo = PyMongo(app)

# Collections
patients_collection = mongo.db.patients
doctors_collection = mongo.db.doctors
appointments_collection = mongo.db.appointments

### Sample Data
# patients_collection.insert_one({'name': 'John Doe', 'email': 'john@example.com'})
# doctors_collection.insert_one({'name': 'Dr. Smith', 'specialization': 'Cardiology'})

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    doctors = []
    for doctor in doctors_collection.find():
        doctors.append({
            '_id': str(doctor['_id']),
            'name': doctor['name'],
            'specialization': doctor['specialization']
        })
    return jsonify(doctors), 200

@app.route('/api/patients/<patient_id>/book/<doctor_id>', methods=['POST'])
def book_appointment(patient_id, doctor_id):
    patient = patients_collection.find_one({'_id': ObjectId(patient_id)})
    doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})

    if not patient or not doctor:
        return jsonify({'error': 'Patient or doctor not found'}), 404

    appointment_request = {
        'patient_id': patient_id,
        'doctor_id': doctor_id,
        'status': 'Pending'
    }

    result = appointments_collection.insert_one(appointment_request)
    return jsonify({
        'message': 'Appointment request sent',
        '_id': str(result.inserted_id),
        'status': appointment_request['status']
    }), 201

@app.route('/api/appointments/<doctor_id>', methods=['GET'])
def get_appointments_for_doctor(doctor_id):
    doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})
    
    if not doctor:
        return jsonify({'error': 'Doctor not found'}), 404
    
    appointments = []
    for appointment in appointments_collection.find({'doctor_id': doctor_id}):
        patient = patients_collection.find_one({'_id': ObjectId(appointment['patient_id'])})
        appointments.append({
            '_id': str(appointment['_id']),
            'patient_name': patient['name'],
            'status': appointment['status']
        })
    
    return jsonify(appointments), 200

@app.route('/api/appointments/<appointment_id>/accept', methods=['POST'])
def accept_appointment(appointment_id):
    appointment = appointments_collection.find_one({'_id': ObjectId(appointment_id)})
    
    if not appointment:
        return jsonify({'error': 'Appointment not found'}), 404
    
    appointments_collection.update_one(
        {'_id': ObjectId(appointment_id)},
        {'$set': {'status': 'Accepted'}}
    )
    
    return jsonify({'message': 'Appointment accepted'}), 200

@app.route('/api/appointments/<appointment_id>/decline', methods=['POST'])
def decline_appointment(appointment_id):
    appointment = appointments_collection.find_one({'_id': ObjectId(appointment_id)})
    
    if not appointment:
        return jsonify({'error': 'Appointment not found'}), 404
    
    appointments_collection.update_one(
        {'_id': ObjectId(appointment_id)},
        {'$set': {'status': 'Declined'}}
    )
    
    return jsonify({'message': 'Appointment declined'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    
### Authentication: Adding Patients and Doctors

@app.route('/api/patients/register', methods=['POST'])
def register_patient():
    data = request.json
    if 'name' in data and 'email' in data and 'password' in data:
        hashed_password = generate_password_hash(data['password'], method='sha256')
        new_patient = {
            'name': data['name'],
            'email': data['email'],
            'password': hashed_password
        }
        result = patients_collection.insert_one(new_patient)
        return jsonify({
            'message': 'Patient registered',
            '_id': str(result.inserted_id)
        }), 201
    return jsonify({'error': 'Invalid data'}), 400

@app.route('/api/doctors/register', methods=['POST'])
def register_doctor():
    data = request.json
    if 'name' in data and 'email' in data and 'password' in data and 'specialization' in data:
        hashed_password = generate_password_hash(data['password'], method='sha256')
        new_doctor = {
            'name': data['name'],
            'email': data['email'],
            'password': hashed_password,
            'specialization': data['specialization']
        }
        result = doctors_collection.insert_one(new_doctor)
        return jsonify({
            'message': 'Doctor registered',
            '_id': str(result.inserted_id)
        }), 201
    return jsonify({'error': 'Invalid data'}), 400

### View a specific doctor's details

@app.route('/api/doctors/<doctor_id>', methods=['GET'])
def get_doctor(doctor_id):
    doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})
    if doctor:
        return jsonify({
            '_id': str(doctor['_id']),
            'name': doctor['name'],
            'email': doctor['email'],
            'specialization': doctor['specialization']
        }), 200
    return jsonify({'error': 'Doctor not found'}), 404

### View a specific patient's details

@app.route('/api/patients/<patient_id>', methods=['GET'])
def get_patient(patient_id):
    patient = patients_collection.find_one({'_id': ObjectId(patient_id)})
    if patient:
        return jsonify({
            '_id': str(patient['_id']),
            'name': patient['name'],
            'email': patient['email']
        }), 200
    return jsonify({'error': 'Patient not found'}), 404

### Cancel an appointment by the patient

@app.route('/api/appointments/<appointment_id>/cancel', methods=['POST'])
def cancel_appointment(appointment_id):
    appointment = appointments_collection.find_one({'_id': ObjectId(appointment_id)})
    
    if not appointment:
        return jsonify({'error': 'Appointment not found'}), 404

    if appointment['status'] == 'Cancelled':
        return jsonify({'error': 'Appointment already cancelled'}), 400
    
    appointments_collection.update_one(
        {'_id': ObjectId(appointment_id)},
        {'$set': {'status': 'Cancelled'}}
    )
    
    return jsonify({'message': 'Appointment cancelled'}), 200

### List all appointments for a patient

@app.route('/api/patients/<patient_id>/appointments', methods=['GET'])
def get_appointments_for_patient(patient_id):
    patient = patients_collection.find_one({'_id': ObjectId(patient_id)})
    
    if not patient:
        return jsonify({'error': 'Patient not found'}), 404
    
    appointments = []
    for appointment in appointments_collection.find({'patient_id': patient_id}):
        doctor = doctors_collection.find_one({'_id': ObjectId(appointment['doctor_id'])})
        appointments.append({
            '_id': str(appointment['_id']),
            'doctor_name': doctor['name'],
            'specialization': doctor['specialization'],
            'status': appointment['status']
        })
    
    return jsonify(appointments), 200

from flask import Flask, jsonify, request, session
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import jwt

app = Flask(__name__)

# Secret key for session and JWT
app.config['SECRET_KEY'] = 'supersecretkey'
app.config["MONGO_URI"] = "mongodb://localhost:27017/doctor_patient_db"
mongo = PyMongo(app)

# Collections
patients_collection = mongo.db.patients
doctors_collection = mongo.db.doctors
appointments_collection = mongo.db.appointments

### Middleware for route protection

def token_required(f):
    def decorator(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = patients_collection.find_one({'_id': ObjectId(data['user_id'])}) or \
                           doctors_collection.find_one({'_id': ObjectId(data['user_id'])})
            if not current_user:
                raise ValueError("User not found")
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)
    return decorator

### Login Functionality

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if 'email' in data and 'password' in data:
        user = patients_collection.find_one({'email': data['email']}) or \
               doctors_collection.find_one({'email': data['email']})
        
        if user and check_password_hash(user['password'], data['password']):
            token = jwt.encode({
                'user_id': str(user['_id']),
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, app.config['SECRET_KEY'], algorithm="HS256")

            return jsonify({'token': token}), 200
        
        return jsonify({'message': 'Invalid email or password'}), 401

    return jsonify({'message': 'Invalid request'}), 400

### Search Doctors by Name or Specialization

@app.route('/api/doctors/search', methods=['GET'])
def search_doctors():
    query = request.args.get('q', '')
    doctors = []
    search_filter = {'$or': [
        {'name': {'$regex': query, '$options': 'i'}},
        {'specialization': {'$regex': query, '$options': 'i'}}
    ]}

    for doctor in doctors_collection.find(search_filter):
        doctors.append({
            '_id': str(doctor['_id']),
            'name': doctor['name'],
            'specialization': doctor['specialization']
        })

    return jsonify(doctors), 200

### Doctor Availability Management

@app.route('/api/doctors/<doctor_id>/availability', methods=['POST'])
@token_required
def set_availability(current_user, doctor_id):
    if str(current_user['_id']) != doctor_id:
        return jsonify({'message': 'Unauthorized access'}), 403

    data = request.json
    if 'available_times' not in data:
        return jsonify({'message': 'Invalid data'}), 400

    available_times = data['available_times']  # Expecting list of datetime strings
    doctors_collection.update_one(
        {'_id': ObjectId(doctor_id)},
        {'$set': {'available_times': available_times}}
    )

    return jsonify({'message': 'Availability updated'}), 200

### Booking an Appointment with Date and Time

@app.route('/api/patients/<patient_id>/book/<doctor_id>', methods=['POST'])
@token_required
def book_appointment(current_user, patient_id, doctor_id):
    if str(current_user['_id']) != patient_id:
        return jsonify({'message': 'Unauthorized access'}), 403

    data = request.json
    if 'appointment_time' not in data:
        return jsonify({'message': 'Invalid data'}), 400

    appointment_time = data['appointment_time']  # Expecting datetime string

    doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})
    if not doctor:
        return jsonify({'message': 'Doctor not found'}), 404

    if 'available_times' in doctor and appointment_time not in doctor['available_times']:
        return jsonify({'message': 'Doctor not available at this time'}), 400

    appointment_request = {
        'patient_id': patient_id,
        'doctor_id': doctor_id,
        'appointment_time': appointment_time,
        'status': 'Pending'
    }

    result = appointments_collection.insert_one(appointment_request)
    return jsonify({
        'message': 'Appointment request sent',
        '_id': str(result.inserted_id),
        'status': appointment_request['status']
    }), 201

### List all appointments for a doctor

@app.route('/api/doctors/<doctor_id>/appointments', methods=['GET'])
@token_required
def get_appointments_for_doctor(current_user, doctor_id):
    if str(current_user['_id']) != doctor_id:
        return jsonify({'message': 'Unauthorized access'}), 403

    doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})
    
    if not doctor:
        return jsonify({'message': 'Doctor not found'}), 404
    
    appointments = []
    for appointment in appointments_collection.find({'doctor_id': doctor_id}):
        patient = patients_collection.find_one({'_id': ObjectId(appointment['patient_id'])})
        appointments.append({
            '_id': str(appointment['_id']),
            'patient_name': patient['name'],
            'appointment_time': appointment['appointment_time'],
            'status': appointment['status']
        })
    
    return jsonify(appointments), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
