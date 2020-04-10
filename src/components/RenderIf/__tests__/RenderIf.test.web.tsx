import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import RenderIf from '../index';

describe('RenderIf', () => {
  it('should not render anything', () => {
    const component = mount(
      <RenderIf isTrue={false}>
        <Text>test</Text>
      </RenderIf>,
    );

    expect(component.text()).toBe('');
  });

  it('should render the text passed', () => {
    const component = mount(
      <RenderIf isTrue={true}>
        <Text>test</Text>
      </RenderIf>,
    );

    expect(component.text()).toBe('test');
  });
});
