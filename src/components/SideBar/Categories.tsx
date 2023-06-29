import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, filterCategory, getAllCategories } from '../../store/fakeStoreSlice';
import styles from './Categories.module.scss'

const Categoryes = () => {
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
    <div>
      <ul>
        {state.categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleChange(category)} className={styles.button}>
              {cap(category)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categoryes;