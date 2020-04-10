import { StyleSheet } from 'react-native';
import { COLORS } from '../../style/colors';

export const storyPointStyles = StyleSheet.create({
  wrapper: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.DARK_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    color: COLORS.DARK_GRAY,
  },
});
