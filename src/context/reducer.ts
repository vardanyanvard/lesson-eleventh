import { IAction, IState } from './types';

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'add/product':
      const foundedItem = state.basketList.findIndex((item) => item.id === action.payload.id);

      if (foundedItem >= 0) {
        state.basketList[foundedItem].count += 1;
      } else {
        state.basketList = [...state.basketList, action.payload];
      }

      return {
        ...state,
      };

    case 'increment/count':
      state.basketList.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
      });
      return {
        ...state,
      };

    case 'decrement/count':
      state.basketList.map((item) => {
        if (item.count > 1 && item.id === action.payload.id) {
          item.count--;
        }
      });
      return {
        ...state,
      };

    case 'remove/product':
      return {
        ...state,
        basketList: state.basketList.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
