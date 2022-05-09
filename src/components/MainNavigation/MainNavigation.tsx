import React from 'react';

import { navigation } from '@/data/fakeData';

import { NavItem } from '@/components/NavItem/NavItem';

export const MainNavigation = () => {
  return (
    <nav className='flex items-center lg:hidden'>
      <ul className='flex items-center'>
        {navigation.map((item) => (
          <NavItem key={item.key} item={item} classes='mr-[14px] last:mr-0' />
        ))}
      </ul>
    </nav>
  );
};
