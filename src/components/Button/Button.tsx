import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { AppThunk } from '../../store/store';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  action: AppThunk;
}

const Button: FC<ButtonProps> = ({text, action}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button className={styles.button} onClick={() => dispatch(action)}>{text}</button>
    </>
  )
}

export default Button;