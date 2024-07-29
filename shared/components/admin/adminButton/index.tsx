
import React, { ReactNode } from "react";

interface adminButtont {
    className: string;
    onClick?: any;
    text?: string;
    children?: ReactNode;
}

export const AdminButton = ({ className, onClick, text, children }: adminButtont) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
            {children}

        </button>
    );
};


