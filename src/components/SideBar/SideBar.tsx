import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { clearFilter } from '../../store/fakeStoreSlice';
import Categoryes from "./Categories"
import styles from './SideBar.module.scss'

const SideBar: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <Categoryes />
      <button onClick={() => dispatch(clearFilter())} className={styles.button}>Clear filter</button>
    </div>
  )
}

export default SideBar;