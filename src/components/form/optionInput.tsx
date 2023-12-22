import React, { ChangeEvent, FC } from 'react';
import Select from './select';
import { optionApi } from '@/api/options.api';

interface OptionInputProps {
    label: string;
    options: { id: number; name: string }[];
    collectData: (
        _key: string,
        _value: string,
        keysToRemove?: string[]
    ) => void;
    childOptionsToReset?: string[];
    addChildOptions?: (options: Option[]) => void;
}

const OptionInput: FC<OptionInputProps> = ({
    label,
    options,
    collectData,
    childOptionsToReset,
    addChildOptions,
}) => {
    const handleOptionChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        try {
            const { data } = await optionApi.getOptions(+e.target.value);
            const propData = options.find(
                (option) => option.id === +e.target.value
            );
            collectData(label, propData?.name || '', childOptionsToReset);
            if (addChildOptions) addChildOptions(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Select
                label={label}
                options={options}
                handleChange={handleOptionChange}
            />
        </>
    );
};

export default OptionInput;
