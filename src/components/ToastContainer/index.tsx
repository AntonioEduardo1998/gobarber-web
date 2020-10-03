import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: {
        transform: 'translateX(120%)',
        opacity: 0,
      },
      enter: {
        transform: 'translateX(0%)',
        opacity: 1,
      },
      leave: {
        transform: 'translateX(120%)',
        opacity: 0,
      },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast style={props} key={key} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
