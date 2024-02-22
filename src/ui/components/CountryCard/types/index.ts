import { ICountry } from '@app/types';

type ActionType = 'add' | 'remove';

export interface ICountryCard {
  country: ICountry;
  action: (country: ICountry) => void;
  type?: ActionType;
}
