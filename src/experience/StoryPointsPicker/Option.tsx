import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StoryPoint from '../../components/StoryPoint';
import { pointPickerStyles } from './styles';

interface Props {
  option: { points: number, description: string };
  selected: boolean;
  selectStoryPoint: (points: number) => void;
}

const Option: FunctionComponent<Props> = (props) => {
  const { option, selected, selectStoryPoint } = props;

  const pointStyles = selected
    ? pointPickerStyles.optionSelectedPoints
    : pointPickerStyles.optionPoints;
  const pointTextStyles = selected
    ? pointPickerStyles.optionSelectedText
    : pointPickerStyles.optionText;
  const descriptionStyles = selected
    ? pointPickerStyles.optionDescriptionSelected
    : undefined;

  return (
    <TouchableOpacity
      style={pointPickerStyles.option}
      onPress={() => selectStoryPoint(option.points)}
      testID={`story-points-picker-option-${option.points}`}
    >
      <StoryPoint points={option.points} style={pointStyles} textStyle={pointTextStyles} />
      <Text
        testID="option-description"
        style={[pointPickerStyles.optionDescription, descriptionStyles]}
      >
        {option.description}
      </Text>
    </TouchableOpacity>
  );
};

export default Option;
