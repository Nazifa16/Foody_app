import React, { useRef } from 'react'

interface AdminDropdownT {
    p?: string
    classNameDiv?: string
    classNameSelect?: string
    getText?: (text: string) => void

}

function AdminDropdown({
    p = '',
    classNameDiv,
    classNameSelect,
    getText,

}: AdminDropdownT) {
    const ref = useRef<HTMLSelectElement>(null)
    const handleChange = () => {
        if (ref.current && getText) {
            getText(ref.current.value)
        }
    }
    return (
        <div className={classNameDiv}>
            <p className='text-base font-medium mb-1 text-admin-text'>{p}</p>
            <select className={classNameSelect}
                onChange={handleChange}
                ref={ref}
                defaultValue=""
            >
                <option value="All">All</option>
                <option></option>
            </select>
        </div>
    )
}

export default AdminDropdown