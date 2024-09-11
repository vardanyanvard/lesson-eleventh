import { useContext } from 'react';
import styles from './basket.module.scss';
import { ProductsContext } from '../../context/context';
import BasketItem from '../BasketItem/BasketItem';

function Basket() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('not in provider');
  }

  const { state, dispatch } = context;

  return (
    <div className={styles.basketContent}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={styles.content}>
          {state.basketList.map((prod) => (
            <BasketItem key={prod.id} prod={prod} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
      .
    </div>
  );
}

export default Basket;
