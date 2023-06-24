import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearCategory, fakeStoreState, filterCategory, getAllCategories } from '../store/fakeStoreSlice';

const Categoryes = () => {
  const state = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  const handleChange = (category: string) => {
    if (state.category === '') {
      dispatch(filterCategory(category));
    } else {
      dispatch(clearCategory());
    }
  };
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {state.categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleChange(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categoryes;