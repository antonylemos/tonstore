import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ICountry } from '@app/types';

import { zustandStorage } from './utils';

type CountriesPersist = {
  countries: ICountry[];
  addCountryToCart: (country: ICountry) => void;
  removeCountryToCart: (commonName: string) => void;
};

export const useCartStore = create<
  CountriesPersist,
  [['zustand/persist', CountriesPersist]]
>(
  persist(
    (set, get) => ({
      countries: [],
      addCountryToCart: (country) => {
        set({ countries: [...get().countries, country] });
      },
      removeCountryToCart: (commonName) => {
        set({
          countries: get().countries.filter(
            (country) => country.name.common !== commonName,
          ),
        });
      },
    }),
    {
      name: 'country-cart-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
