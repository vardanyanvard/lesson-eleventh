import { Dispatch } from 'react';

export interface IProducts {
  id: number;
  name: string;
  price: number;
  picture: string;
  count: number;
}

export interface IState {
  products: IProducts[];
  basketList: IProducts[];
}

export interface IAction {
  type: string;
  payload: IProducts;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
