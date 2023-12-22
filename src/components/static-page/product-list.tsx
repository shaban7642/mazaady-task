import React from 'react';
import ProductItem from './product-item';
import PlusIcon from '@/icons/plus';

const products = [
    {
        imgSrc: '/images/shirt.png',
        title: 'Six-piece clothing set (blouse - pants - hat and...',
        startingPrice: 1000,
        daysToStart: 2,
        hoursToStart: 10,
        minutesToStart: 50,
    },
    {
        imgSrc: '/images/coins.png',
        title: 'Six-piece clothing set (blouse - pants - hat and...',
        startingPrice: 1000,
        daysToStart: 2,
        hoursToStart: 10,
        minutesToStart: 50,
    },
    {
        imgSrc: '/images/t-shirts.png',
        title: 'Six-piece clothing set (blouse - pants - hat and...',
        startingPrice: 1000,
        daysToStart: 2,
        hoursToStart: 10,
        minutesToStart: 50,
        isLiked: true,
    },
    {
        imgSrc: '/images/jacket.png',
        title: 'Six-piece clothing set (blouse - pants - hat and...',
        startingPrice: 1000,
        daysToStart: 2,
        hoursToStart: 10,
        minutesToStart: 50,
        isHot: true,
    },
    {
        imgSrc: '/images/bird.png',
        title: 'Six-piece clothing set (blouse - pants - hat and...',
        startingPrice: 1000,
        daysToStart: 2,
        hoursToStart: 10,
        minutesToStart: 50,
        isLiked: true,
    },
];

const ProductList = () => {
    return (
        <div>
            <div className='self-stretch flex w-full justify-between gap-5 items-start max-md:item-center max-md:max-w-full max-md:flex-wrap'>
                <div className='items-stretch flex flex-wrap gap-2.5  max-md:justify-center'>
                    <button className='text-amber-500 text-center text-sm font-bold capitalize whitespace-nowrap justify-center items-stretch border border-[color:var(--Secondry-orange,#FF951D)] bg-orange-50 grow px-6 py-2 rounded-2xl border-solid '>
                        Products
                    </button>
                    <button className='text-zinc-500 text-center text-sm capitalize whitespace-nowrap justify-center items-stretch border border-[color:var(--grays-5,#E0E0E0)] bg-white grow px-8 py-2 rounded-2xl border-solid '>
                        Articles
                    </button>
                    <button className='text-zinc-500 text-center text-sm capitalize whitespace-nowrap justify-center items-stretch border border-[color:var(--grays-5,#E0E0E0)] bg-white grow px-7 py-2 rounded-2xl border-solid '>
                        Reviews
                    </button>
                </div>
                <div className=' max-md:hidden self-stretch flex flex-col justify-center items-stretch'>
                    <div className='bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] flex w-full flex-col justify-center items-stretch px-3 py-3 rounded-xl'>
                        <button className='justify-between flex gap-1 items-start'>
                            <PlusIcon />
                            <div className='text-white text-center text-sm font-bold capitalize self-stretch grow whitespace-nowrap'>
                                Add Review
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='items-stretch flex gap-2 mt-5 self-start'>
                <div className='text-zinc-800 text-3xl font-extrabold capitalize grow whitespace-nowrap'>
                    Products
                </div>
                <div className='text-zinc-500 text-center text-sm capitalize self-center whitespace-nowrap my-auto'>
                    ( 12 )
                </div>
            </div>
            {products.map((product, idx) => (
                <ProductItem
                    key={idx}
                    imgSrc={product.imgSrc}
                    title={product.title}
                    startingPrice={product.startingPrice}
                    daysToStart={product.daysToStart}
                    hoursToStart={product.hoursToStart}
                    minutesToStart={product.minutesToStart}
                    isLiked={product.isLiked}
                    isHot={product.isHot}
                />
            ))}
        </div>
    );
};

export default ProductList;
