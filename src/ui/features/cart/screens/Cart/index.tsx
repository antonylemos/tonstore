import { MasonryFlashList } from '@shopify/flash-list';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { IconPressable, Typography } from '@ui/components';
import { CountryCard } from '@ui/components/CountryCard';
import { Header } from '@ui/components/Header';

import { stylesheet } from './styles';
import { useCart } from './useCart';

export function Cart() {
  const { styles, theme } = useStyles(stylesheet);

  const {
    goBackToPreviousScreen,
    totalCountriesInCart,
    countries,
    removeCountryToCart,
  } = useCart();

  return (
    <View style={styles.container}>
      <Header>
        <IconPressable onPress={goBackToPreviousScreen}>
          <ArrowLeft size={24} color={theme.colors.action} />
        </IconPressable>

        <View style={styles.greeting}>
          <Typography type="title">{totalCountriesInCart} países</Typography>
        </View>

        <IconPressable>
          <ShoppingCart size={24} color={theme.colors.action} />
        </IconPressable>
      </Header>

      <MasonryFlashList
        data={countries}
        numColumns={2}
        estimatedItemSize={150}
        renderItem={({ item: country }) => (
          <CountryCard
            type="remove"
            country={country}
            action={(countryItem) =>
              removeCountryToCart(countryItem.name.common)
            }
          />
        )}
        contentContainerStyle={styles.countriesList}
      />
    </View>
  );
}
