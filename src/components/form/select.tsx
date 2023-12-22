import React, { ChangeEvent, FC } from 'react';

interface SelectProps {
    label: string;
    options: { id: number; name: string }[];
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    hasOther?: boolean;
}

const Select: FC<SelectProps> = ({
    label,
    options,
    handleChange,
    hasOther = false,
    required = false,
}) => {
    return (
        <>
            <label
                htmlFor={label}
                className='block md:w-full text-sm font-small leading-6 text-gray-900'
            >
                {label} {required && <span className='text-red-500'>*</span>}
            </label>
            <div className='mt-1 mb-3'>
                <select
                    className='bg-[#FFF5E9] md:w-full p-2 text-sm font-small rounded-md border-[#FF951D] outline-[#FF951D] text-gray-600 shadow-sm ring-1 ring-offset-slate-[#FF951D] ring-[#FF951D] placeholder:text-gray-400 selected:ring-0 focus:ring-1 focus:ring-offset-slate-[#FF951D] focus:ring-[#FF951D] md:text-md md:leading-6'
                    name={label}
                    id={label}
                    onChange={handleChange}
                    required
                >
                    <option selected disabled>
                        Choose {label}
                    </option>
                    {options.map((option, idx) => (
                        <option key={idx} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                    {hasOther && <option value={-1}>Other</option>}
                </select>
            </div>
        </>
    );
};

export default Select;
