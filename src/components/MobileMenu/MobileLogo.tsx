import Link from 'next/link';
import React from 'react';

import LogoWhite from '@/assets/svgs/logo-white.svg';

interface MobileLogoProps {
  nonFocusable?: boolean;
}

export const MobileLogo = ({ nonFocusable }: MobileLogoProps) => {
  return (
    <Link href='/'>
      <a tabIndex={nonFocusable ? -1 : 0}>
        <LogoWhite className='h-[28px] w-[110px]' />
      </a>
    </Link>
  );
};
