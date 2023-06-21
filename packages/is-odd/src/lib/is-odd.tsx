

import { BaseFunction } from '@share/is-even';
import { isOdd } from '../utils';

/* eslint-disable-next-line */
export interface IsOddProps {}

export function IsOdd(props: IsOddProps) {
  return (
    <BaseFunction text='是Odd' judge={isOdd} />
  );
}

export default IsOdd;
