import { API_BASE_URL } from '@app/constants';
import { ICountry } from '@app/types';
import { sleep } from '@app/utils';

export async function listCountries() {
  await sleep();

  const response = await fetch(`${API_BASE_URL}/all`);
  const body = await response.json();

  return body as ICountry[];
}
