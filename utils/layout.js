import { Platform } from 'react-native';

export const getStatusBarPadding = () => {
  return Platform.OS === 'android' ? 25 : 0;
};

export const getStatusBarStyle = () => ({
  paddingTop: getStatusBarPadding(),
});

export const layoutContainer = {
  flex: 1,
  paddingHorizontal: 20,
};

