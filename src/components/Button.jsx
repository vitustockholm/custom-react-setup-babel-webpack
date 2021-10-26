import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ text }) => {
  return <StyledButton text='Click Me'>{text}</StyledButton>;
};

export default Button;
