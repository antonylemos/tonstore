import { useQuery } from '@tanstack/react-query';

import { ICountry, WithStatus } from '@app/types';

import { listCountries } from '../services';

export const COUNTRIES_QUERY_KEY = ['countries'];

export type CountriesQueryData = WithStatus<ICountry>[];

export function useCountries() {
  const { data, isLoading } = useQuery({
    staleTime: Infinity,
    queryKey: COUNTRIES_QUERY_KEY,
    queryFn: async () => {
      const countries = await listCountries();
      return countries as CountriesQueryData;
    },
  });

  return {
    countries: data ?? [],
    isLoading,
  };
}
