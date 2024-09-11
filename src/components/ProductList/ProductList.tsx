import { ProductsContext } from '../../context/context';
import { useContext } from 'react';
import Product from '../Product/Product';
import styles from './productList.module.scss';

function ProductList() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('not in Context');
  }

  const { state, dispatch } = context;

  return (
    <div className={styles.productsListContent}>
      {state.products.map((product) => (
        <Product product={product} key={product.id} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default ProductList;
