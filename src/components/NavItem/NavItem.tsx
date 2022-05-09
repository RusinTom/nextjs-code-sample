import Link from 'next/link';
import React from 'react';

import { clsxm } from '@/lib/clsxm';

import { NavigationItem } from '@/types/NavigationItem';

interface NavItemProps {
  item: NavigationItem;
  classes?: string;
}

export const NavItem = ({ item, classes }: NavItemProps) => {
  return (
    <li>
      <Link href={item.url}>
        <a className={clsxm('nav-link-base', classes)}>{item.label}</a>
      </Link>
    </li>
  );
};
