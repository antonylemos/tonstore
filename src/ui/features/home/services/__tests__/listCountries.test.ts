import { fetchMock } from '@app/__mocks__/fetchMock';

import { listCountries } from '..';

describe('List Countries Service', () => {
  it('should be able list all countries', async () => {
    const responseBodyMock = {
      name: {
        common: 'Bermuda',
      },
    };

    fetchMock(responseBodyMock);

    const responseBody = await listCountries();

    expect(responseBody).toEqual(responseBodyMock);
  });
});
