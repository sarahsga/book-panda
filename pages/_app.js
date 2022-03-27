// import '../styles/globals.css'

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import booksReducer from "../store/reducers/books";
import categoryReducer from "../store/reducers/categories";
import cartReducer from "../store/reducers/cart";
import Layout from "../components/UI/Layout/Layout"

const rootReducer = combineReducers({
  bk: booksReducer,
  ctg: categoryReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
