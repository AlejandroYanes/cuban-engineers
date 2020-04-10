import React from 'react';
import { mount } from 'enzyme';
import Option from '../Option';
import { pointPickerStyles } from '../styles';

const selectStoryPoint = jest.fn();

describe('StoryPointsPicker Option component', () => {
  it('should pass the right props when not selected', () => {
    const component = mount(
      <Option
        option={{ points: 3, description: 'r' }}
        selected={false}
        selectStoryPoint={selectStoryPoint}
      />,
    );

    const storyPointsComponent = component.find('StoryPoint');
    expect(storyPointsComponent.prop('style')).toEqual(pointPickerStyles.optionPoints);

    const descriptionComponent = component.find('Text[testID="option-description"]');
    expect(descriptionComponent.prop('style')).toEqual([pointPickerStyles.optionDescription, undefined]);
  });

  it('should pass the right props when selected', () => {
    const component = mount(
      <Option
        option={{ points: 3, description: 'r' }}
        selected={true}
        selectStoryPoint={selectStoryPoint}
      />,
    );

    const storyPointsComponent = component.find('StoryPoint');
    expect(storyPointsComponent.prop('style')).toEqual(pointPickerStyles.optionSelectedPoints);

    const descriptionComponent = component.find('Text[testID="option-description"]');
    expect(descriptionComponent.prop('style')).toEqual([
      pointPickerStyles.optionDescription,
      pointPickerStyles.optionDescriptionSelected,
    ]);
  });
});
