import React, { useRef } from 'react'

interface AdminTextareaT {
    p?: string
    classNameDiv?: string
    placeholder?: string
    getText?: (text: string) => void

}
function AdminTextarea({ p, classNameDiv, placeholder, getText }: AdminTextareaT) {
    const ref = useRef<HTMLTextAreaElement>(null)
    const handleBlur = () => {
        if (ref.current && getText) {
            getText(ref.current.value)
        }
    }
    return (
        <div className={classNameDiv}>
            <p className='text-admin-text font-medium  mb-2   text-base font-display'>{p}</p>
            <textarea placeholder={placeholder}
                className='w-full  rounded-2xl h-24  font-medium text-base text-admin-modal-placeholder pt-2 pl-4  bg-admin-input capitalize font-display'
                ref={ref}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default AdminTextarea