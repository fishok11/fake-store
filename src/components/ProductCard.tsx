import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

type ProductCardProps = {
  id?: number;
  title?: string;
  price?: number;
  category?: string; 
  description?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  }
}

const ProductCard: FC<ProductCardProps> = ({id, title, price, category, description, image, rating}) => {
  const {productId} = useParams();

  return (
    <Link to={`/product/${productId}`}>
      <Card sx={{ maxHeight: '294px', height: '100%'}}>
        <CardMedia 
          component="img"
          height="154"
          image={image}
          alt="Paella dish"
        />
        <CardContent> 
          <Typography>{price} $</Typography>
          <Typography variant="body2" gutterBottom>{title}</Typography>
          {/* <Typography>{category}</Typography> */}
          {/* <Typography>{description}</Typography> */}
          {/* <Typography>{rating.rate}</Typography> */}
          {/* <Typography>{rating.count}</Typography> */}
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    </Link>
  )
};

export default ProductCard;