import { useReducer } from 'react';
import { reducer } from './context/reducer';
import { initialState, ProductsContext } from './context/context';
import Basket from './components/Basket/Basket';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='ProductsPageContent'>
      <ProductsContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <Basket />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
