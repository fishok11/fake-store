import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../store/types';

type ProductCardProps = Omit<Product, 'description' | 'rating' | 'category'>;

const ProductCard: FC<ProductCardProps> = ({id, image, title, price}) => {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img 
          src={image}
        />
        <div> 
          <p>{price} $</p>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  )
};

export default ProductCard;