import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

export function useHome() {
  const { styles } = useStyles(stylesheet);

  return { styles };
}
