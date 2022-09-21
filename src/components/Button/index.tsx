import type {FC} from 'react';
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
}

const Button: FC<Props> = ({children}) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
