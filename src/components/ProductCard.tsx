import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  category: string; 
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

const ProductCard: FC<ProductCardProps> = ({id, image, title, price}) => {
  return (
    <Card variant="outlined">
      <Link to={`/product/${id}`} className='link'>
        <CardMedia 
          component="img"
          height="200"
          image={image}
          alt="Paella dish"
        />
        <CardContent> 
          <Typography color="text.secondary">{price} $</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textOverflow: 'ellipsis'}}>{title.length >= 30 ? title.slice(0, 30) + '...' : title}</Typography>
        </CardContent>
      </Link>
      <CardActions>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
};

export default ProductCard;