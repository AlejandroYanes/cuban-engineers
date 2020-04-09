import { StyleSheet } from 'react-native';
import { COLORS } from '../../style/colors';

export const modalStyles = StyleSheet.create(
  {
    wrapper: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
      padding: 12,
      borderRadius: 6,
      backgroundColor: COLORS.DARK,
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      color: COLORS.WHITE,
    },
    closeButton: {
      marginLeft: 'auto',
    },
    closeButtonText: {
      color: COLORS.LIGHT_GRAY,
      fontSize: 18,
    },
    body: {
      flexDirection: 'column',
      paddingTop: '12px',
    },
  },
);
