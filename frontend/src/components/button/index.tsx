import { ReactNode } from "react";
import "./style.css";

type ButtonProps = {
    children: ReactNode;
    type: "primary" | "secondary";
    icon: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, type, icon, onClick }) => {
    return (
        <button className={`btn_${type}`} onClick={onClick}>
            <span className="material-symbols-outlined">{icon}</span>
            {children}
        </button>
    );
};

export default Button;
