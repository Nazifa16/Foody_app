// import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
interface AdminDropdownT {
    p?: string;
    classNameDiv?: string;
    classNameSelect?: string;
    getData?: any;
    setId?: (id: string) => void;
    queryKey?: string;
}

// interface AdminSelectRestFormT {
//     name: string;
// }

function AdminDropdown({
    p = '',
    classNameDiv,
    classNameSelect,
    getData,
    setId,
    queryKey,

}: AdminDropdownT) {
    // const { register, getValues, handleSubmit, setValue } = useForm<AdminSelectRestFormT>()

    const { data }: { data: any } = useQuery({
        queryFn: getData,
        queryKey: [{ queryKey }]
    })

    const options = data?.data?.result?.data
    const ref = useRef<HTMLSelectElement>(null)


    const onSubmit = () => {
        if (ref.current && setId) {
            setId(ref.current.value);
        }
    };

    return (
        <div className={classNameDiv}>
            <p className="font-medium text-admin-text text-base font-display mb-1 ">{p}</p>
            <select
                className={classNameSelect}
                ref={ref}
                onChange={onSubmit}
                defaultValue=""
            >
                <option value="" disabled>Select an option</option>
                {options?.map((item: any, index: number) => (
                    <option key={index} value={item?.id}>
                        {item?.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default AdminDropdown;