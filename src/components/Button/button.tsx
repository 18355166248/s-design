import {FC, forwardRef} from 'react';
import styles from './index.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
}

const BaseButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const buttonNode = <button {...props}></button>;

  return buttonNode;
};

const Button = forwardRef<unknown, ButtonProps>(BaseButton);

export default Button;
