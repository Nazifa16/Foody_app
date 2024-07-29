import React, { useRef } from 'react'

interface adminInputT {
    p?: string
    type?: string
    classNameDiv?: string
    placeholder: string
    getText?: (text: string) => void

}

function AdminInput({
    p = 'Name',
    type = 'text',
    classNameDiv,
    placeholder,
    getText,
}: adminInputT) {
    const ref = useRef<HTMLInputElement>(null)

    const handleBlur = () => {
        if (ref.current && getText) {
            getText(ref.current.value)
        }
    }
    return (
        <div className={classNameDiv}>
            <p className='font-medium text-admin-text text-base font-display'>{p}</p>
            <input placeholder={placeholder}
                className="rounded-2xl font-medium text-base bg-admin-input text-admin-modal-placeholder pl-5 py-3 capitalize font-display"
                type={type}
                ref={ref}
                onBlur={handleBlur}
            />
        </div>

    )
}

export default AdminInput