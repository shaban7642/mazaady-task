import { categoryApi } from '@/api/category.api';
import { propertyApi } from '@/api/properties.api';
import FormComponent from '@/components/form/form-component';
import FormTable from '@/components/form/form-table';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { ChangeEvent, useState } from 'react';

interface FormTaskProps {
    categories: Category[];
}

const FormTask: NextPage<FormTaskProps> = ({ categories }) => {
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    const [properties, setProperties] = useState<Property[]>([]);
    const [showData, setShowData] = useState<boolean>(false);
    const [finalData, setFinalData] = useState<
        Array<{ key: string; value: string }>
    >([]);

    const collectData = (
        _key: string,
        _value: string,
        keysToRemove?: string[],
        keysToKeep?: string[]
    ) => {
        const existingItem = finalData.find(({ key }) => key === _key);
        if (existingItem) {
            const newResults = finalData.map(({ key, value }) => {
                if (key === existingItem.key) {
                    value = _value;
                }
                return { key, value };
            });

            if (keysToKeep) {
                console.log('objects removed');
                setFinalData(
                    newResults.filter(({ key }) => keysToKeep?.includes(key))
                );
            } else if (keysToRemove) {
                setFinalData(
                    newResults.filter(({ key }) => !keysToRemove?.includes(key))
                );
            } else {
                setFinalData(newResults);
            }
            return;
        }

        const newItem = { key: _key, value: _value };
        if (keysToKeep) {
            console.log('objects not removed');
            setFinalData((prev) =>
                [...prev, newItem].filter(({ key }) =>
                    keysToKeep?.includes(key)
                )
            );
        } else if (keysToRemove) {
            setFinalData((prev) =>
                [...prev, newItem].filter(
                    ({ key }) => !keysToRemove?.includes(key)
                )
            );
        } else {
            setFinalData((prev) => [...prev, newItem]);
        }
    };

    const removeElementFromFinalData = (keys: string[]) => {
        const newData = finalData.filter(({ key }) => !keys.includes(key));
        setFinalData(newData);
    };

    const handleCategoryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        try {
            const categoryId = e.target.value;
            const categoryData = categories.find((c) => c.id === +categoryId);
            setSubCategories(categoryData?.children || []);
            collectData('Main Category', categoryData?.name || '', undefined, [
                'Main Category',
            ]);
        } catch (error) {
            console.error('Error while fetching sub categories:', error);
        }
    };

    const handleSubCategoryChange = async (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        try {
            const subCategoryId = e.target.value;
            const { data } = await propertyApi.getProperties(+subCategoryId);
            setProperties(data || []);
            const subCategoryData = subCategories.find(
                (sub) => sub.id === +subCategoryId
            );
            collectData(
                'Sub Category',
                subCategoryData?.name || '',
                undefined,
                ['Main Category', 'Sub Category']
            );
        } catch (error) {
            console.error('Error while fetching properties:', error);
        }
    };

    const handleSubmit = () => {
        setShowData(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Head>
                <title>Form-Task</title>
            </Head>
            <main className='flex flex-col flex-start justify-between md:flex-row py-6  px-10'>
                <div className='relative flex flex-row  items-center md:w-1/3'>
                    <FormComponent
                        categories={categories}
                        subCategories={subCategories}
                        properties={properties}
                        handleCategoryChange={handleCategoryChange}
                        handleSubCategoryChange={handleSubCategoryChange}
                        collectData={collectData}
                        removeElementFromFinalData={removeElementFromFinalData}
                        handleSubmit={handleSubmit}
                    />
                </div>

                {showData && (
                    <div className='relative bg-white overflow-x-auto shadow-md sm:rounded-lg md:w-2/3 h-fit transition-all duration-300 ease-in-out mt-2 md:mt-0'>
                        <FormTable finalData={finalData} />
                    </div>
                )}
            </main>
        </>
    );
};

FormTask.getInitialProps = async () => {
    try {
        const { data } = await categoryApi.getCategories();
        return { categories: data.categories };
    } catch (error) {
        console.error('Error while fetching categories:', error);
        return { categories: [] };
    }
};

export default FormTask;
