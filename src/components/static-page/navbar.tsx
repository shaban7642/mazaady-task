import BellIcon from '@/icons/bell';
import PlusIcon from '@/icons/plus';
import SearchIcon from '@/icons/search';
import WorldIcon from '@/icons/world';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white flex w-full flex-col items-stretch pt-3 px-20 max-md:max-w-full max-md:px-5 max-md:pb-3'>
            <div className='flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1'>
                <div className='flex items-stretch justify-between gap-5'>
                    <div className='md:hidden'>
                        <button>
                            <span className={`text-gray text-3xl`}>
                                &#9776;
                            </span>
                        </button>
                    </div>
                    <img
                        loading='lazy'
                        srcSet='/images/mazaady-logo.png'
                        className='aspect-[2.51] object-contain object-center w-[108px] overflow-hidden shrink-0 max-w-full'
                    />
                    <div className='max-md:hidden items-stretch self-center flex justify-between gap-5 my-auto max-md:justify-center'>
                        <div className='text-pink-700 text-lg font-bold leading-6 capitalize'>
                            Home
                        </div>
                        <div className='text-zinc-500 text-lg leading-6 capitalize'>
                            Blog
                        </div>
                        <div className='text-zinc-500 text-lg leading-6 capitalize'>
                            Gifts
                        </div>
                    </div>
                </div>
                <div className='items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap'>
                    <div className='items-center flex justify-between gap-5 max-md:justify-center'>
                        <SearchIcon />
                        <BellIcon />
                        <img
                            loading='lazy'
                            srcSet='/images/small-hala.png'
                            className='aspect-square object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]'
                        />
                        <div className='max-md:hidden self-stretch flex grow basis-[0%] flex-col justify-center items-stretch'>
                            <div className='bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] flex w-full flex-col justify-center items-stretch px-4 py-3 rounded-xl'>
                                <button className='justify-between flex gap-1 items-start'>
                                    <PlusIcon />
                                    <div className='text-white text-center text-sm font-bold capitalize self-stretch grow whitespace-nowrap'>
                                        Add new product
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' max-md:hidden items-stretch self-center flex gap-5 my-auto'>
                        <WorldIcon />
                        <div className='text-zinc-800 text-lg font-bold leading-6 capitalize self-start'>
                            EN
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-md:hidden bg-pink-700 flex w-11 shrink-0 h-1.5 flex-col ml-36 mt-2 rounded-lg self-start max-md:ml-2.5' />
        </div>
    );
};

export default Navbar;
