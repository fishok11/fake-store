import { FC } from 'react';
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
    <div>
      <Link to={`/product/${id}`} className='link'>
        <img 
          src={image}
        />
        <div> 
          <p>{price} $</p>
          <p>{title.length >= 30 ? title.slice(0, 30) + '...' : title}</p>
        </div>
      </Link>
    </div>
  )
};

export default ProductCard;