import Link from 'next/link';
import React from 'react';

import { clsxm } from '@/lib/clsxm';

import { BASE_LINK_VARIANT_ENUM, BaseLinkVariant } from '@/types/BaseLink';

interface BaseLinkProps {
  label: string;
  url: string;
  Icon?: React.ReactNode;
  variant?: BaseLinkVariant;
  classes?: string;
}

export const BaseLink = ({
  label,
  url,
  Icon,
  variant,
  classes,
}: BaseLinkProps) => {
  return (
    <Link href={url}>
      <a
        className={clsxm(
          'nav-link-base',
          Icon && 'inline-flex items-center',
          variant && BASE_LINK_VARIANT_ENUM[variant],
          classes
        )}
      >
        {Icon && <span className='mr-1.5'>{Icon}</span>}
        {label}
      </a>
    </Link>
  );
};
