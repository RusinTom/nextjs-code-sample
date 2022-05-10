import React from 'react';

import { clsxm } from '@/lib/clsxm';

interface SearchBarProps {
  classes?: string;
  nonFocusable?: boolean;
}

export const SearchBar = ({ classes, nonFocusable }: SearchBarProps) => {
  return (
    <form
      className={clsxm(
        'mx-[53px] flex w-full items-center justify-end lg:mx-0 lg:flex lg:hidden lg:flex-nowrap lg:bg-black',
        classes
      )}
    >
      <div className='relative w-full max-w-[657px] rounded-[10px] bg-searchBarBg text-gray focus-within:text-white lg:mx-0 lg:mx-0 lg:flex-nowrap lg:rounded-none lg:bg-black'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-4'>
          <svg viewBox='0 0 19 19' className='h-[18px] w-[18px] fill-current'>
            <path d='M14.7771 13.5396L18.5247 17.2864L17.2866 18.5245L13.5399 14.7769C12.1458 15.8945 10.4118 16.5023 8.625 16.4998C4.278 16.4998 0.75 12.9718 0.75 8.62476C0.75 4.27776 4.278 0.749756 8.625 0.749756C12.972 0.749756 16.5 4.27776 16.5 8.62476C16.5025 10.4115 15.8947 12.1455 14.7771 13.5396ZM13.0219 12.8904C14.1323 11.7484 14.7525 10.2176 14.75 8.62476C14.75 5.24026 12.0086 2.49976 8.625 2.49976C5.2405 2.49976 2.5 5.24026 2.5 8.62476C2.5 12.0084 5.2405 14.7498 8.625 14.7498C10.2179 14.7523 11.7486 14.1321 12.8906 13.0216L13.0219 12.8904Z' />
          </svg>
        </span>
        <input
          tabIndex={nonFocusable ? -1 : 0}
          className='focus-active block w-full bg-transparent pt-[12px] pb-[11px] pl-11 text-[13px] leading-[18px] lg:focus:border-transparent lg:active:border-transparent'
        />
      </div>
      <input
        tabIndex={nonFocusable ? -1 : 0}
        className='nav-link-base ml-[33px] cursor-pointer text-[15px] font-extrabold leading-5 lg:ml-0'
        type='submit'
        value='Search'
      />
    </form>
  );
};
