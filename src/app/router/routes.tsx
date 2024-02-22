import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '@ui/features/cart/screens';
import { Home } from '@ui/features/home/screens';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}
