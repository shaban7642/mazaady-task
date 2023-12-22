import React, { FC } from 'react';

interface FormTableProps {
    finalData: { key: string; value: string }[];
}

const FormTable: FC<FormTableProps> = ({ finalData }) => {
    return (
        <table className='md:w-full bg-white text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <tbody>
                {finalData.map((data, idx) => (
                    <tr
                        key={idx}
                        className='border-b border-[#FF951D] dark:border-[#FF951D]'
                    >
                        <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-[#FFF5E9] dark:text-gray-800 dark:bg-[#FFF5E9]'
                        >
                            {data.key}
                        </th>
                        <td className='px-6 py-4'>{data.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FormTable;
