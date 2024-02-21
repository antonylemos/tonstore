import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

export function useHome() {
  const stylesHook = useStyles(stylesheet);

  return { ...stylesHook };
}
