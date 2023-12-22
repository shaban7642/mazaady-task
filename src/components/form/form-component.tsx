import React, { ChangeEvent, FC } from 'react';
import Select from './select';
import PropertyInput from './propertyInput';
import Button from './button';

interface FormComponentProps {
    categories: Category[];
    subCategories: SubCategory[];
    properties: Property[];
    handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleSubCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    collectData: (_key: string, _value: string) => void;
    removeElementFromFinalData: (keys: string[]) => void;
    handleSubmit: () => void;
}

const FormComponent: FC<FormComponentProps> = ({
    categories,
    subCategories,
    properties,
    handleCategoryChange,
    handleSubCategoryChange,
    collectData,
    removeElementFromFinalData,
    handleSubmit,
}) => {
    return (
        <div className='bg-white flex md:w-full mr-4 flex-col p-8 rounded-lg max-md:px-5'>
            <Select
                label='Main Category'
                options={categories}
                handleChange={handleCategoryChange}
                required={true}
            />

            <Select
                label='Sub Category'
                options={subCategories}
                handleChange={handleSubCategoryChange}
                required={true}
            />

            {properties.length > 0 &&
                properties.map((prop) => (
                    <PropertyInput
                        key={prop.id}
                        label={prop.name}
                        options={prop.options}
                        collectData={collectData}
                        removeElementFromFinalData={removeElementFromFinalData}
                    />
                ))}

            <div className='my-2' />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default FormComponent;
