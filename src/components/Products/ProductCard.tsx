import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { CartItemToAdded, Product } from '../../store/types';
import styles from './ProductCard.module.scss'
import { useCookies } from 'react-cookie';
import { useAppDispatch } from '../../store/hooks';
import { addProductToCart } from '../../store/cartSlice';

type ProductCardProps = Omit<Product, 'description' | 'rating' | 'category'>;

const ProductCard: FC<ProductCardProps> = ({id, image, title, price}) => {
  const dispatch = useAppDispatch()
  const [cookies] = useCookies(['user'])
  const date = new Date()
  const cartItem: CartItemToAdded = {
    userId: cookies.user?.id,
    products: [{productId: id, quantity: 1}]
  }

  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={image} alt='' className={styles.image}/> 
        </div>
        <p className={styles.title}>{title}</p>
      </Link>
      <div className={styles.actionContainer}>
        <p className={styles.price}>$ {price}</p>
        <button className={styles.button} onClick={() => dispatch(addProductToCart(cartItem))}>Add to cart</button>
      </div>
    </div>
  )
};

export default memo(ProductCard);