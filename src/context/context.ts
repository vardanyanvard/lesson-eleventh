import { IContext, IState } from './types';
import bambi from '../assets/images/bambi.jpg';
import divergent from '../assets/images/divergent.jpg';
import harryPotter from '../assets/images/harryPotter.jpg';
import insurgent from '../assets/images/insurgent.jpg';
import reflect from '../assets/images/reflect.jpg';
import sadako from '../assets/images/sadako.jpg';
import theOutesiders from '../assets/images/theOutsiders.jpg';
import twilinght from '../assets/images/twilight.jpg';
import React from 'react';

export const initialState: IState = {
  products: [
    { id: 100, name: 'Bambi', price: 15000, picture: bambi, count: 1 },
    { id: 101, name: 'Divergent', price: 17000, picture: divergent, count: 1 },
    { id: 102, name: 'HarryPotter', price: 30000, picture: harryPotter, count: 1 },
    { id: 103, name: 'Insurgent', price: 45000, picture: insurgent, count: 1 },
    { id: 104, name: 'Reflect', price: 19000, picture: reflect, count: 1 },
    { id: 105, name: 'Sadako', price: 26000, picture: sadako, count: 1 },
    {
      id: 106,
      name: 'The Outesiders',
      price: 25000,
      picture: theOutesiders,
      count: 1,
    },
    { id: 107, name: 'Twilinght', price: 22000, picture: twilinght, count: 1 },
  ],
  basketList: [],
};

export const ProductsContext = React.createContext<IContext | undefined>(undefined);
