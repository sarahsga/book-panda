import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import booksReducer from './store/reducers/books'
import categoryReducer from './store/reducers/categories'
import cartReducer from './store/reducers/cart'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop'

const rootReducer = combineReducers({
  bk: booksReducer,
  ctg: categoryReducer,
  cart: cartReducer
})
const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
