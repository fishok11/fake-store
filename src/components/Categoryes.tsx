import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Categoryes = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState<Array<string> | null>(null)
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data => setCategories(data))
  }, []);

  if (categories === null) return null;

  return (
    <div>

    </div>
  );
}

export default Categoryes;