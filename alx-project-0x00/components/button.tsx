import React from 'react';

interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full' | 'rounded-lg';
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    title, 
    size = 'medium', 
    shape = 'rounded-md', 
    onClick,
    className = '' 
}) => {
    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
        'rounded-lg': 'rounded-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`
                bg-blue-600 hover:bg-blue-700 text-white font-medium
                transition-colors duration-200
                ${sizeClasses[size]}
                ${shapeClasses[shape]}
                ${className}
            `}
        >
            {title}
        </button>
    );
};

export default Button;
