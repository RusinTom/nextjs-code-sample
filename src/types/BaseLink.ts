export enum BASE_LINK_VARIANT_ENUM {
  contained = 'base-link--contained',
  inline = 'base-link--inline',
}

export type BaseLinkVariant = keyof typeof BASE_LINK_VARIANT_ENUM;
