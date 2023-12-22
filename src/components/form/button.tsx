import React, { FC } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            type='button'
            className='text-white bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] outline-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
