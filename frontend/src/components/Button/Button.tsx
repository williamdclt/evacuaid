import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import './Button.style.scss';

const Button: FunctionComponent<ButtonHTMLAttributes<any>> = props => {
  return <button {...props} className={(props.className || '') + ' btn'} />;
};

export default Button;
