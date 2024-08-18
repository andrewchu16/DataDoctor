import "./style.css";

type InputProps = {
    type: string;
    placeholder?: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    return (
        <input className="input" type={type} placeholder={placeholder}></input>
    );
};

export default Input;
