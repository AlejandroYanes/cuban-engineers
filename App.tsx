import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import StoryPointsPicker from './src/experience/StoryPointsPicker';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StoryPointsPicker />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
