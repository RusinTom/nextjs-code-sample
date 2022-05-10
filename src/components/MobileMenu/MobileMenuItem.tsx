import React from 'react';

import { NavigationItem } from '@/types/NavigationItem';

interface MobileMenuItemProps {
  item: NavigationItem;
  nonFocusable?: boolean;
}

export const MobileMenuItem = ({ item, nonFocusable }: MobileMenuItemProps) => {
  return (
    <li className='active' key={item.key}>
      <a
        tabIndex={nonFocusable ? -1 : 0}
        href={item.url}
        className='block border-b-2 bg-black px-2 py-4 text-sm font-semibold text-white'
      >
        {item.label}
      </a>
    </li>
  );
};
