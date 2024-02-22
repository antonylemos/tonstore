import { MasonryFlashList } from '@shopify/flash-list';
import { Moon, ShoppingCart, Sun } from 'lucide-react-native';
import React from 'react';
import { Image, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import hiGif from '@app/assets/images/hi.gif';
import { IconPressable, Typography } from '@ui/components';
import { CountryCard } from '@ui/components/CountryCard';
import { Header } from '@ui/components/Header';
import { isDarkTheme, toggleTheme } from '@ui/styles/utils';

import { stylesheet } from './styles';
import { useHome } from './useHome';

export function Home() {
  const { styles, theme } = useStyles(stylesheet);

  const { countries, navigateToCart, addCountryToCart, totalCountriesInCart } =
    useHome();

  const themeIcon = isDarkTheme ? (
    <Moon size={24} color={theme.colors.action} />
  ) : (
    <Sun size={24} color={theme.colors.action} />
  );

  return (
    <View style={styles.container}>
      <Header>
        <IconPressable onPress={toggleTheme}>{themeIcon}</IconPressable>

        <View style={styles.greeting}>
          <Image source={hiGif} style={styles.emotion} />
          <Typography type="title">Tonstore</Typography>
        </View>

        <IconPressable onPress={navigateToCart}>
          <ShoppingCart size={24} color={theme.colors.action} />
          <Typography type="title">{totalCountriesInCart}</Typography>
        </IconPressable>
      </Header>

      <MasonryFlashList
        data={countries}
        numColumns={2}
        estimatedItemSize={150}
        renderItem={({ item: country }) => (
          <CountryCard country={country} action={addCountryToCart} />
        )}
        contentContainerStyle={styles.countriesList}
      />
    </View>
  );
}
