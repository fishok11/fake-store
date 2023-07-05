import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/types';
import styles from './ProductCard.module.scss'

type ProductCardProps = Omit<Product, 'description' | 'rating' | 'category'>;

const ProductCard: FC<ProductCardProps> = ({id, image, title, price}) => {
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
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  )
};

export default memo(ProductCard);