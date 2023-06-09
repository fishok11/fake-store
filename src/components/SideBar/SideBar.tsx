import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearFilter, fakeStoreState, filterCategory, getAllCategories } from '../../store/fakeStoreSlice';
import styles from './SideBar.module.scss'

const SideBar = () => {
  const state = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  const handleChange = (category: string) => {
    dispatch(filterCategory(category));
  };
  const cap = (str: string) => {
    if (str === '') return str;

    return str
      .split(' ')
      .map(word => 
        word.charAt(0).toUpperCase() 
        + word.slice(1).toLowerCase()
      )
      .join(' ')
  }

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p className={styles.titleCategories}>Categories</p>
      <ul>
        {state.categories.map((category) => (
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