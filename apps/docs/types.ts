import { JSX } from 'react';

export type IconType = 'Check' | 'ChevronRight';

export type ButtonConfigType = {
  variant: string;
  size: string;
  disabled: boolean;
  fullWidth: boolean;
  showIcon: boolean;
  icon: IconType;
  customText: string;
  gradient: { from: string; to: string };
  rounded: string;
  shadow: boolean;
  hoverEffect: boolean;
};

export type IconMapType = Record<IconType, JSX.Element>;
