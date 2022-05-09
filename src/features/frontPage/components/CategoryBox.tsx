import React from 'react';

type CategoryBox = {
  id: string;
  title: string;
  category: string;
  percentage: number;
};

interface CategoryBoxProps {
  data: CategoryBox;
}

export const CategoryBox = ({ data }: CategoryBoxProps) => {
  return (
    <div className='flex cursor-pointer items-center justify-center rounded-[5px] border-2 border-transparent bg-black px-[24px] py-[13px] transition-all hover:border-red'>
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
