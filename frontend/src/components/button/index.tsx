import { ReactNode } from "react";
import "./style.css";

type ButtonProps = {
    children: ReactNode;
    type: "primary" | "secondary";
    icon: string;
};

const Button: React.FC<ButtonProps> = ({ children, type, icon }) => {
    return (
        <button className={`btn_${type}`}>
            <span className="material-symbols-outlined">{icon}</span>
            {children}
        </button>
    );
};

export default Button;
