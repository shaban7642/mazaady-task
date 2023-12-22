import ArrowDownIcon from '@/icons/arrow-down';
import ArrowUpIcon from '@/icons/arrow-up';
import ColoredDownloadIcon from '@/icons/coloredDownload';
import DownloadIcon from '@/icons/download';
import EyeIcon from '@/icons/eye';
import QrCodeSvg from '@/icons/qr-code';
import ShareIcon from '@/icons/share';
import React, { useState } from 'react';

const QrCodeCard = () => {
    const [showCode, setShowCode] = useState(true);

    const handleShowCode = () => {
        setShowCode((prev) => !prev);
    };
    return (
        <div className='bg-white flex w-full flex-col items-stretch mt-6 px-6 py-6 rounded-3xl max-md:px-5'>
            <div className='flex justify-between gap-5 items-start'>
                <div className='text-zinc-800 text-2xl font-bold leading-6 capitalize'>
                    QR Code
                </div>
                <div className='flex justify-between gap-5 items-start'>
                    <EyeIcon />
                    <ShareIcon />
                    <DownloadIcon />
                    <button onClick={handleShowCode} className='md:hidden '>
                        {showCode ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </button>
                </div>
            </div>
            <div className={`${showCode ? 'block' : 'hidden'} `}>
                <div className='bg-orange-50 flex w-full flex-col justify-center items-stretch mt-3.5 pl-4 pr-8 py-5 rounded-2xl max-md:pr-5'>
                    <div className='items-stretch flex justify-between gap-2'>
                        <ColoredDownloadIcon />
                        <div className='overflow-hidden text-zinc-800 text-center text-ellipsis text-xs self-center grow whitespace-nowrap my-auto'>
                            Download the QR code or share it with your friends.
                            ColoredDownloadIcon
                        </div>
                    </div>
                </div>
                <QrCodeSvg className='aspect-[1.15] object-contain object-center w-full overflow-hidden mt-4' />
            </div>
        </div>
    );
};

export default QrCodeCard;
