import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { clearCategory, filterCategory } from '../store/fakeStoreSlice';

const Categoryes = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true);
  const [categories, setCategories] = useState<Array<string> | null>(null)
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data => setCategories(data))
  }, []);

  if (categories === null) return null;

  return (
    <List
      sx={{ width: '100%', maxWidth: '250px', bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Categoryes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} onClick={() => dispatch(clearCategory())}>
            <ListItemText primary={'All'} />
          </ListItemButton>
          {categories.map((category: string) => (
            <ListItemButton sx={{ pl: 3 }} key={category} onClick={() => dispatch(filterCategory(category))}>
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default Categoryes;