import { StyleSheet } from 'react-native';
import { COLORS } from '../../style/colors';

export const pointPickerStyles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 34,
      borderRadius: 16,
      padding: 8,
      backgroundColor: '#e3e5ed',
    },
    label: {
      marginLeft: 10,
      color: '#576574',
    },
    description: {
      fontSize: 13,
      color: COLORS.LIGHT_GRAY,
    },
    modalOptions: {
      marginTop: 16,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    option: {
      alignItems: 'center',
      margin: 8,
    },
    optionPoints: {
      borderColor: COLORS.GRAY,
    },
    optionSelectedPoints: {
      backgroundColor: COLORS.BLUE,
      borderColor: COLORS.LIGHT_BLUE,
    },
    optionText: {
      color: COLORS.GRAY,
    },
    optionSelectedText: {
      color: COLORS.WHITE,
    },
    optionDescription: {
      color: COLORS.GRAY,
      fontSize: 10,
      marginTop: 8,
    },
    optionDescriptionSelected: {
      color: COLORS.WHITE,
    },
  },
);
