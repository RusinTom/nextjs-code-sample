import Link from 'next/link';
import React from 'react';

import LogoWhite from '@/assets/svgs/logo-white.svg';

export const MobileLogo = () => {
  return (
    <Link href='/'>
      <a>
        <LogoWhite className='h-[28px] w-[110px]' />
      </a>
    </Link>
  );
};
