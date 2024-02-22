import { useCountries } from '../../hooks';

export function useHome() {
  const { countries, isLoading } = useCountries();

  return { countries, isLoading };
}
