import React, { FunctionComponent, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import RenderIf from '../RenderIf';
import { modalStyles } from './styles';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
}

const animatedValue = new Animated.Value(0);
const animatedStyles = { opacity: animatedValue };

export const Modal: FunctionComponent<Props> = (props) => {
  const { isOpen, closeModal, title, children } = props;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
      }).start();
    } else {
      animatedValue.setValue(0);
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={modalStyles.wrapper} testID="modal-backdrop">
          <TouchableWithoutFeedback>
            <Animated.View style={[modalStyles.modal, animatedStyles]} testID="modal">
              <View style={modalStyles.header} testID="modal-header">
                <RenderIf isTrue={!!title}>
                  <Text style={modalStyles.title} testID="modal-header-title">{title}</Text>
                </RenderIf>
                <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton} testID="modal-header-close-btn">
                  <Text style={modalStyles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={modalStyles.body} testID="modal-body">
                {children}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return null;
};

export default Modal;
