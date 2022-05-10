import React from 'react';

import { clsxm } from '@/lib/clsxm';

interface BackdropProps {
  active: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Backdrop = ({ active, onClick }: BackdropProps) => {
  return (
    <div
      className={clsxm(
        'fixed top-0 right-0 hidden h-full w-full bg-grayBg',
        active && 'backdrop z-10 block'
      )}
      onClick={() => onClick(false)}
    />
  );
};
