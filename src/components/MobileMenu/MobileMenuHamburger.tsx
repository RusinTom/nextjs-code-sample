import React from 'react';

interface MobileMenuHamburgerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenuHamburger = ({
  setIsOpen,
}: MobileMenuHamburgerProps) => {
  return (
    <div className='flex hidden items-center lg:block'>
      <button
        className='mobile-menu-button outline-none'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <svg
          className='text-gray-500 hover:text-red-500 h-6 w-6 '
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
    </div>
  );
};
