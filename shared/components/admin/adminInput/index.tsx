import React, { useRef, forwardRef } from 'react';

interface AdminInputT {
    p?: string;
    type?: string;
    classNameDiv?: string;
    placeholder: string;
    getText?: (text: string) => void;
}

const AdminInput = forwardRef<HTMLInputElement, AdminInputT>(function AdminInput(
    { p = 'Name', type = 'text', classNameDiv, placeholder, getText },
    ref
) {
    const handleBlur = () => {
        if (ref && getText && ref instanceof HTMLInputElement) {
            console.log(ref.value);

            getText(ref.value);
        }
    };

    return (
        <div className={classNameDiv}>
            <p className="font-medium text-admin-text text-base font-display">{p}</p>
            <input
                placeholder={placeholder}
                className="rounded-2xl font-medium text-base bg-admin-input text-admin-modal-placeholder pl-5 py-3 capitalize font-display"
                type={type}
                ref={ref}
                onBlur={handleBlur}
            />
        </div>
    );
});

export default AdminInput;
