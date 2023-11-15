import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, getCategoriesNames, getProducts } from '../../store/fakeStoreSlice';
import styles from './SideBar.module.scss'
import { cap } from '../../utils';

const SideBar = () => {
  const stateStore = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoriesNames());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p className={styles.titleCategories}>Categories</p>
      <ul>
        {stateStore.categories.map((category) => (
          <li key={category}>
            <button onClick={() => dispatch(getProducts(category.toLowerCase()))} className={styles.button}>
              {cap(category)}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(getProducts())} className={styles.clearButton}>Clear</button>
    </div>
  );
}

export default SideBar;
