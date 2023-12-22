import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Select from './select';
import { optionApi } from '@/api/options.api';
import OptionInput from './optionInput';

interface PropertyInputProps {
    label: string;
    options: { id: number; name: string }[];
    collectData: (
        _key: string,
        _value: string,
        keysToRemove?: string[]
    ) => void;
    removeElementFromFinalData: (keys: string[]) => void;
}

const PropertyInput: FC<PropertyInputProps> = ({
    label,
    options,
    collectData,
    removeElementFromFinalData,
}) => {
    const [other, setOther] = useState<boolean>(false);
    const [childOptions, setChildOptions] = useState<Option[]>([]);
    const [subChildOptions, setSubChildOptions] = useState<Option[]>([]);

    const handlePropertyChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        try {
            // find the keys that will be reset
            const keysToRemove: string[] = [];
            childOptions.forEach((child) => {
                keysToRemove.push(child?.name);
            });
            subChildOptions.forEach((subChild) => {
                keysToRemove.push(subChild?.name);
            });

            // if user chooses other will reset all options
            if (e.target.value === '-1') {
                setOther(true);
                setChildOptions([]);
                setSubChildOptions([]);
                if (keysToRemove.length > 0)
                    removeElementFromFinalData(keysToRemove);
            } else {
                // if user chooses option will update the childs and rest the subChilds
                setOther(false);
                const { data } = await optionApi.getOptions(+e.target.value);
                setChildOptions(data);
                setSubChildOptions([]);
                const propData = options.find(
                    (option) => option.id === +e.target.value
                );

                collectData(label, propData?.name || '', keysToRemove);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Select
                label={label}
                options={options}
                handleChange={handlePropertyChange}
                required={false}
                hasOther={true}
            />
            {other && (
                <input
                    type='text'
                    placeholder={'Please mention it'}
                    onChange={(e) => collectData(label, e.target.value || '')}
                    className='bg-[#FFF5E9] px-2 py-1 mb-2 text-sm font-small rounded-md border-[#FF951D] outline-[#FF951D] text-gray-600 shadow-sm ring-1 ring-offset-slate-[#FF951D] ring-[#FF951D] placeholder:text-gray-400 PropertyInputed:ring-0 focus:ring-1 focus:ring-offset-slate-[#FF951D] focus:ring-[#FF951D] md:text-md md:leading-6'
                />
            )}
            {childOptions.length > 0 &&
                childOptions.map((child) => (
                    <>
                        <OptionInput
                            key={child.id}
                            label={child.name}
                            options={child.options}
                            collectData={collectData}
                            addChildOptions={(options: Option[]) => {
                                setSubChildOptions(options);
                            }}
                            childOptionsToReset={subChildOptions.map(
                                (subChild) => subChild?.name
                            )}
                        />
                    </>
                ))}
            {subChildOptions.length > 0 &&
                subChildOptions.map((child) => (
                    <>
                        <OptionInput
                            key={child.id}
                            label={child.name}
                            options={child.options}
                            collectData={collectData}
                        />
                    </>
                ))}
        </>
    );
};

export default PropertyInput;
