import FilledHeartIcon from '@/icons/filled-heart';
import HeartIcon from '@/icons/heart';
import React, { FC } from 'react';

interface ProductItemProps {
    imgSrc: string;
    title: string;
    startingPrice: number;
    daysToStart: number;
    hoursToStart: number;
    minutesToStart: number;
    isHot?: boolean;
    isLiked?: boolean;
}

const ProductItem: FC<ProductItemProps> = ({
    imgSrc,
    title,
    startingPrice,
    daysToStart,
    hoursToStart,
    minutesToStart,
    isHot = false,
    isLiked = false,
}) => {
    return (
        <div className='bg-white self-stretch mt-3.5 pl-2 py-2 rounded-[34px] max-md:max-w-full'>
            <div className='max-md:gap-5 flex   max-md:items-stretch '>
                <div className='flex flex-col items-stretch   '>
                    <div className='flex-col overflow-hidden relative flex aspect-[1.141732283464567] w-full items-stretch pl-8 pt-12 max-md:mt-6 max-md:pl-5'>
                        <img
                            loading='lazy'
                            srcSet={imgSrc}
                            className='absolute h-full w-full object-cover object-center rounded-[33.804px_33.804px] max-md:rounded-[23.804px_23.804px] inset-0'
                        />
                        <div
                            className={`relative text-white text-center text-xs capitalize whitespace-nowrap ${
                                isHot ? 'bg-amber-500' : 'bg-pink-700'
                            }  justify-center items-stretch mt-10  max-md:mt-3 px-6 md:w-[114px] max-md:w-[90px]  py-3.5 rounded-[33.804px_0px] max-md:px-3`}
                        >
                            {isHot ? 'Hot Sale' : 'Live auction'}
                        </div>
                        <div
                            className={`md:hidden absolute top-2 left-2 bg-white justify-center items-stretch   w-[28px] h-[28px] pt-[2px] pl-[2px] rounded-[50%_50%]`}
                        >
                            {isLiked ? <FilledHeartIcon /> : <HeartIcon />}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-stretch w-[75%] ml-5  max-md:ml-0'>
                    <div className='items-stretch flex flex-col w-full my-auto max-md:max-w-full max-md:mt-8'>
                        <div className='overflow-wrap text-zinc-800 text-ellipsis text-lg max-md:text-sm max-lg:text-sm capitalize max-md:max-w-full'>
                            {title}
                        </div>
                        <div className='text-zinc-800 text-xl capitalize mt-2 max-md:max-w-full'>
                            <span className='text-lg text-zinc-500 max-md:text-sm max-lg:text-sm'>
                                starting price
                            </span>
                            <span className='font-bold ml-3 text-2xl max-md:text-sm max-lg:text-sm'>
                                {startingPrice} EGP
                            </span>
                        </div>
                        <div className='justify-between items-center flex flex-wrap gap-2 mt-2 max-md:max-w-full max-md:flex-wrap'>
                            <div className='text-zinc-500 text-lg max-md:text-sm max-lg:text-sm capitalize my-auto'>
                                Lot starts in
                            </div>
                            <div className='items-stretch self-stretch flex gap-4  max-md:max-w-full max-md:flex-wrap max-md:pr-5'>
                                <div className='text-amber-500 text-center text-xl max-md:text-xs max-lg:text-xs font-bold capitalize bg-orange-50 grow justify-center items-stretch px-7 py-3 rounded-3xl max-md:px-5'>
                                    {daysToStart}
                                    <span className='text-sm max-md:text-xs max-lg:text-xs'>
                                        days
                                    </span>
                                </div>
                                <div className='text-amber-500 text-center text-xl max-md:text-xs max-lg:text-xs font-bold capitalize whitespace-nowrap bg-orange-50 grow justify-center items-stretch pl-6 pr-4 py-3.5 rounded-3xl max-md:pl-5'>
                                    {hoursToStart}
                                    <span className='text-sm max-md:text-xs max-lg:text-xs'>
                                        hours
                                    </span>
                                </div>
                                <div className='text-amber-500 text-center text-xl max-md:text-xs max-lg:text-xs font-bold capitalize whitespace-nowrap bg-orange-50 grow justify-center items-stretch p-3.5 rounded-3xl'>
                                    {minutesToStart}
                                    <span className='text-sm max-md:text-xs max-lg:text-xs'>
                                        minutes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-md:hidden aspect-square object-contain object-center w-full overflow-hidden max-w-[24px]'>
                    {isLiked ? <FilledHeartIcon /> : <HeartIcon />}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
