import { Dispatch } from 'react';
import { IAction, IProducts } from '../../context/types';
import styles from './product.module.scss';

interface IProps {
  product: IProducts;
  dispatch: Dispatch<IAction>;
}

function Product({ product, dispatch }: IProps) {
  return (
    <div className={styles.productsItem}>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <img src={product.picture} alt={product.name} />
      <button
        onClick={() => {
          dispatch({ type: 'add/product', payload: product });
        }}
      >
        Move
      </button>
    </div>
  );
}

export default Product;
