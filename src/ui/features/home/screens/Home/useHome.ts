import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { useCartStore } from '@app/stores';

import { useCountries } from '../../hooks';

export function useHome() {
  const { navigate } = useNavigation();
  const { countries } = useCountries();
  const { addCountryToCart, countries: storageCountries } = useCartStore();

  const navigateToCart = useCallback(() => {
    navigate('cart' as never);
  }, [navigate]);

  return {
    countries,
    storageCountries,
    totalCountriesInCart: storageCountries.length,
    navigateToCart,
    addCountryToCart,
  };
}
