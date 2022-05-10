import React from 'react';

type CategoryBox = {
  id: string;
  title: string;
  category: string;
  percentage: number;
};

interface CategoryBoxProps {
  data: CategoryBox;
  isAccordionOpen: boolean;
}

export const CategoryBox = ({ data, isAccordionOpen }: CategoryBoxProps) => {
  return (
    <div
      tabIndex={isAccordionOpen ? 0 : -1}
      className='flex cursor-pointer items-center justify-center rounded-[5px] border-2 border-transparent bg-black px-[24px] py-[13px] outline-none transition-all hover:border-red focus:border-red active:border-red'
    >
      <div className='text-center'>
        <p className='text-[13px] leading-[23px] text-gray'>{data.category}</p>
        <h4 className='text-[17px] leading-[23px]'>{data.title}</h4>
        <p className='text-[13px] leading-[23px] text-gray'>
          {data.percentage}%
        </p>
      </div>
    </div>
  );
};
