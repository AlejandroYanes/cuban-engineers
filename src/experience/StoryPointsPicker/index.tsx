import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {
  closeModal as closeModalAction,
  openModal as openModalAction,
  selectStoryPoint as selectStoryPointAction,
} from '../../redux/actions/story-points';
import StoryPoint from '../../components/StoryPoint';
import Modal from '../../components/Modal';
import Option from './Option';
import { pointPickerStyles } from './styles';

const options = [
  { points: 0, description: '10min' },
  { points: 1, description: '30min' },
  { points: 2, description: '1-2 hours' },
  { points: 3, description: 'Half day' },
  { points: 5, description: '1 day' },
  { points: 8, description: '1.5 days' },
  { points: 13, description: '2 days' },
  { points: 21, description: '3 days' },
];

interface Props {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  storyPoints: number;
  selectStoryPoint: (points: number) => void;
}

export const StoryPointsPicker: FunctionComponent<Props> = (props) => {
  const { isOpen, storyPoints, closeModal, openModal, selectStoryPoint } = props;

  const handleOptionSelected = (point) => {
    selectStoryPoint(point);
    closeModal();
  };

  const optionElements = options.map(option => (
    <Option
      key={option.points}
      option={option}
      selected={option.points === storyPoints}
      selectStoryPoint={handleOptionSelected}
    />
  ));

  return (
    <>
      <TouchableOpacity style={pointPickerStyles.container} onPress={openModal}>
        <StoryPoint points={storyPoints} testID="selected-story-point" />
        <Text style={pointPickerStyles.label}>Points</Text>
      </TouchableOpacity>
      <Modal title="Story Point Estimation" isOpen={isOpen} closeModal={closeModal}>
        <Text style={pointPickerStyles.description}>Select an estimation for your task</Text>
        <View style={pointPickerStyles.modalOptions} testID="story-point-options">
          {optionElements}
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = state => state.storyPoints;

const mapDispatchToProps = {
  openModal: openModalAction,
  closeModal: closeModalAction,
  selectStoryPoint: selectStoryPointAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoryPointsPicker);
