import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import RenderIf from '../RenderIf';
import { modalStyles } from './styles';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
}

const Modal: FunctionComponent<Props> = (props) => {
  const { isOpen, closeModal, title, children } = props;

  if (isOpen) {
    return (
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={modalStyles.wrapper}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modal}>
              <View style={modalStyles.header}>
                <RenderIf isTrue={!!title}>
                  <Text style={modalStyles.title}>{title}</Text>
                </RenderIf>
                <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton}>
                  <Text style={modalStyles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={modalStyles.body}>
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return null;
};

export default Modal;
