import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { useCartStore } from '@app/stores';

export function useCart() {
  const { canGoBack, goBack } = useNavigation();
  const { countries, removeCountryToCart } = useCartStore();

  const goBackToPreviousScreen = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return {
    goBackToPreviousScreen,
    countries,
    totalCountriesInCart: countries.length,
    removeCountryToCart,
  };
}
