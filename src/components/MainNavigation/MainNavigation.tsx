import React from 'react';

import { NavItem } from '@/components/NavItem/NavItem';

import { NavigationItem } from '@/types/NavigationItem';

const navigation: NavigationItem[] = [
  { key: '#navItem1', label: 'Lorem', url: '/' },
  { key: '#navItem2', label: 'Lorem', url: '/' },
];

export const MainNavigation = () => {
  return (
    <nav>
      {navigation.map((item) => (
        <NavItem key={item.key} item={item} classes='mr-[14px] last:mr-0' />
      ))}
    </nav>
  );
};
