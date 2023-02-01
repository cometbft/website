import { TokensByBreakpoint } from '@/react-handy-box/components/Box.types';

export const borderRadiiNames = ['small', 'normal', 'circle'] as const;

export const borderRadii: TokensByBreakpoint<
  string,
  typeof borderRadiiNames[number]
> = {
  root: { small: '12px', normal: '24px', circle: '5000px' },
};
