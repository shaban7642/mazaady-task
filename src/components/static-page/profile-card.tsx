import FollowersIcon from '@/icons/followers';
import FollowingIcon from '@/icons/following';
import RateIcon from '@/icons/rate';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

interface ProfileChildCardProps {
    title: ReactNode;
    icon: ReactNode;
    description: string;
}

const ProfileChildCard: FC<ProfileChildCardProps> = ({
    title,
    description,
    icon,
}) => {
    return (
        <div className='bg-orange-50 flex items-center justify-between gap-1.5 pl-2 pr-4 py-3 rounded-2xl'>
            <div className='lg:block md:hidden'>{icon} </div>
            <div className='justify-center items-stretch self-stretch flex grow basis-[0%] flex-col'>
                <div className='text-neutral-700 text-sm max-md:text-xs font-bold capitalize'>
                    {title}
                </div>
                <div className='overflow-hidden text-amber-500 text-ellipsis text-xs whitespace-nowrap'>
                    {description}
                </div>
            </div>
        </div>
    );
};

const ProfileCard = () => {
    return (
        <div className='bg-white flex w-full flex-col p-6 rounded-3xl max-md:px-5'>
            <Image
                alt='hala'
                loading='lazy'
                src='/images/hala.png'
                width={100}
                height={100}
                className='aspect-square object-contain object-center w-[100px] overflow-hidden max-w-full self-start'
            />
            <div className='text-zinc-800 text-2xl font-bold leading-6 capitalize self-stretch mt-4'>
                Hala Ahmed
            </div>
            <div className='overflow-hidden text-neutral-600 text-ellipsis text-sm self-stretch mt-3 '>
                I am Hala Ahmed, I am the owner of the local brand called Beauty
                which is for Mackeup and Skin Care.
            </div>
            <div className='items-center self-center flex  gap-4  max-lg:gap-1 max-md:gap-1 mt-6 px-px max-md:justify-center'>
                <ProfileChildCard
                    title='5'
                    description='Following'
                    icon={<FollowingIcon />}
                />

                <ProfileChildCard
                    title='20'
                    description='Followers'
                    icon={<FollowersIcon />}
                />
                <ProfileChildCard
                    title={
                        <>
                            4.2{' '}
                            <span className=' text-xs text-zinc-500'>(15)</span>
                        </>
                    }
                    description='Rate'
                    icon={<RateIcon />}
                />
            </div>
            <button className='text-white text-center text-base font-bold capitalize whitespace-nowrap bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] self-stretch justify-center items-center mt-6 px-16 py-5 rounded-2xl max-md:px-5'>
                Follow
            </button>
        </div>
    );
};

export default ProfileCard;
