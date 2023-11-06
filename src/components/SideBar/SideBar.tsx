import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearFilter, fakeStoreState, filterCategory, getAllCategoriesNames } from '../../store/fakeStoreSlice';
import styles from './SideBar.module.scss'
import { cap } from '../../utils';

const SideBar = () => {
  const stateStore = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  const handleChange = (category: string) => {
    dispatch(filterCategory(category));
  };

  useEffect(() => {
    dispatch(getAllCategoriesNames());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p className={styles.titleCategories}>Categories</p>
      <ul>
        {stateStore.categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleChange(category)} className={styles.button}>
              {cap(category)}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearFilter())} className={styles.clearButton}>Clear</button>
    </div>
  );
}

export default SideBar;