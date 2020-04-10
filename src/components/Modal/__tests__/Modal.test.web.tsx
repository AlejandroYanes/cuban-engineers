import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import Modal from '../index';

const closeModal = jest.fn();

describe('Modal component', () => {
  it('should not render anything of isOpen os false', () => {
    const component = mount(
      <Modal isOpen={false} closeModal={closeModal}>
        <Text>test</Text>
      </Modal>,
    );

    expect(component.text()).toBe('');
  });

  it('should not render anything of isOpen os false', () => {
    const component = mount(
      <Modal title="title" isOpen={true} closeModal={closeModal}>
        <Text>test</Text>
      </Modal>,
    );

    expect(component.find('[testID="modal-header-title"]').text()).toBe('title');
    expect(component.find('[testID="modal-body"]').text()).toBe('test');
  });
});
