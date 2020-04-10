import React from 'react';
import { mount } from 'enzyme';
import { StoryPointsPicker } from '../index';

const openModal = jest.fn();
const closeModal = jest.fn();
const selectStoryPoint = jest.fn();

describe('StoryPointPicker component', () => {
  beforeEach(() => {
    openModal.mockClear();
    closeModal.mockClear();
    selectStoryPoint.mockClear();
  });

  it('should pass the right props to the children', () => {
    const component = mount(
      <StoryPointsPicker
        isOpen={false}
        openModal={openModal}
        closeModal={closeModal}
        storyPoints={3}
        selectStoryPoint={selectStoryPoint}
      />,
    );

    expect(component.find('StoryPoint[testID="selected-story-point"]').prop('points')).toBe(3);
    expect(component.find('Modal').prop('isOpen')).toBe(false);
  });

  it('should render the options if isOpen is true', () => {
    const component = mount(
      <StoryPointsPicker
        isOpen={true}
        openModal={openModal}
        closeModal={closeModal}
        storyPoints={3}
        selectStoryPoint={selectStoryPoint}
      />,
    );

    expect(component.find('Option').length).toBe(8);
  });

  it('should call selectStoryPoint and close modal when an option is selected', () => {
    const component = mount(
      <StoryPointsPicker
        isOpen={true}
        openModal={openModal}
        closeModal={closeModal}
        storyPoints={3}
        selectStoryPoint={selectStoryPoint}
      />,
    );
    const firstOption = component.find('Option').at(0);
    // @ts-ignore
    firstOption.prop('selectStoryPoint')(1);

    expect(selectStoryPoint).toHaveBeenCalledWith(1);
    expect(closeModal).toHaveBeenCalled();
  });
});
