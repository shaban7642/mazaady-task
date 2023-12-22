import Navbar from '@/components/static-page/navbar';
import ProductList from '@/components/static-page/product-list';
import ProfileCard from '@/components/static-page/profile-card';
import QrCodeCard from '@/components/static-page/qr-code-card';
import Head from 'next/head';
import React from 'react';

const StaticPageTask = () => {
    return (
        <>
            <Head>
                <title>Static-Page-Task</title>
            </Head>
            <div className='bg-neutral-100 flex flex-col items-stretch'>
                <Navbar />
                <div className='self-center w-full max-w-[1272px] max-lg:px-6 mt-12 max-md:max-w-full max-md:mt-1'>
                    <div className='gap-5 flex  max-md:flex-col max-md:items-stretch max-lg:gap-3 '>
                        <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                            <div className='flex flex-col  items-stretch max-md:mt-6'>
                                <ProfileCard />
                                <QrCodeCard />
                            </div>
                        </div>
                        <div className='flex flex-col items-stretch w-[67%]  max-md:w-full max-md:ml-0'>
                            <div className='bg-white flex grow flex-col w-full pt-6 px-6 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:px-5'>
                                <ProductList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StaticPageTask;
