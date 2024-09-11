import { Dispatch } from 'react';
import { IAction, IProducts } from '../../context/types';
import styles from './basketItem.module.scss';

interface IProps {
  prod: IProducts;
  dispatch: Dispatch<IAction>;
}
function BasketItem({ prod, dispatch }: IProps) {
  return (
    <tr>
      <td>{prod.name}</td>
      <td>{prod.price}</td>
      <td>{prod.count}</td>
      <td>{+prod.count * +prod.price}</td>
      <td className={styles.basketItemsbtns}>
        <button onClick={() => dispatch({ type: 'increment/count', payload: prod })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement/count', payload: prod })}>-</button>
        <button onClick={() => dispatch({ type: 'remove/product', payload: prod })}>x</button>
      </td>
    </tr>
  );
}

export default BasketItem;
