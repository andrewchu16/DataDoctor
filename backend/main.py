# 1 - uploading audio

import http.server
import os
from urllib.parse import urlparse, parse_qs
from cgi import FieldStorage

#create directory 
UPLOAD_FOLDER = 'file_directory/'

#ensure directory exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

class HTTPRequestHandler(http.server.BaseHTTPRequestHandler):
    
    def do_POST(self):
        #check path endpoint
        if self.path == "/upload_audio":
            #parse form data
            form = FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={'REQUEST_METHOD': 'POST'}
            )
      
            #check if file in request, send error if not
            if 'file' not in form:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b"Your request did not include a file.")
                return
            
            #retrieve file
            file_item = form['file']

            #check that file was uploaded
            if file_item.filename:
                #clean up file name
                filename = os.path.basename(file_item.filename)
                filepath = os.path.join(UPLOAD_FOLDER, filename)

                #write file to temporary directory
                with open(filepath, 'wb') as output_file:
                    output_file.write(file_item.file.read())

                #respond to client
                self.send_response(200)
                self.end_headers()
                self.wfile.write(f"File {filename} was uploaded successfully.".encode('utf-8'))
            else:
              self.send_response(400)
              self.end_headers()
              self.wfile.write(b"No file was selected")
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Endpoint not found")

if __name__ == "__main__":
    PORT = 8000
    server_address = ('', PORT)
    httpd = http.server.HTTPServer(server_address, HTTPRequestHandler)
    print(f"Server started on port {PORT}")
    httpd.serve_forever()

# 2 - converting audio
POST https://iam.googleapis.com/v1/{name=projects/*/serviceAccounts/*}/keys

