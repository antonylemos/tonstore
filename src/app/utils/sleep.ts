import { HALF_SECOND_IN_MS } from '@app/constants';

export function sleep(ms = HALF_SECOND_IN_MS) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
