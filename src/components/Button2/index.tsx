import type {FC, ReactNode} from 'react';
import React from 'react';
import './index.scss';

interface Props {
  children: ReactNode;
}

const Button2: FC<Props> = ({children}) => {
  return <div className="button">{children}</div>;
};

export default Button2;
