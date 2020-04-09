import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { storyPointStyles } from './styles';

interface Props {
  points: number;
  style?: object;
  textStyle?: object;
}

const StoryPoint: FunctionComponent<Props> = (props) => {
  const { points, style, textStyle } = props;

  return (
    <View style={[storyPointStyles.wrapper, style]}>
      <Text style={[storyPointStyles.points, textStyle]}>{points}</Text>
    </View>
  );
};

export default StoryPoint;
