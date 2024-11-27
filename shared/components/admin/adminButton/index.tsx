
// import React, { ReactNode } from "react";

// interface adminButtont {
//     className: string;
//     onClick?: any;
//     text?: string;
//     children?: ReactNode;
//     type?: any;
// }

// export const AdminButton = ({ className, onClick, text, children, type }: adminButtont) => {
//     return (
//         <button className={className} onClick={onClick} type={type}>
//             {text}
//             {children}

//         </button>
//     );
// };

import React, { ReactNode } from "react";

interface AdminButtonProps {
    className: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text?: string;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const AdminButton = ({ className, onClick, text, children, type = "button", disabled }: AdminButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}>
            {text}
            {children}
        </button>
    );
};

