import {createRef, forwardRef} from 'react';
import {tuple} from '../_utils/type';
import type {SizeType} from '../cnfig-provider/SizeContext';
import styles from './index.module.scss';
import classNames from 'classnames';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text'
);
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');

export type ButtonType = typeof ButtonTypes[number];
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// 区分标签按钮和普通按钮
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {htmlType, disabled, className, ...otherProps} = props;

  const buttonRef = (ref as any) || createRef<HTMLElement>();

  const formatClassName = '';

  const buttonNode = (
    <button
      {...(otherProps as NativeButtonProps)}
      className={formatClassName}
      type={htmlType}
      disabled={disabled}
      ref={buttonRef}
    ></button>
  );

  return buttonNode;
};

const Button = forwardRef<unknown, ButtonProps>(BaseButton);

export default Button;
