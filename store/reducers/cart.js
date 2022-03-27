import * as actionTypes from './../actions'

const LS_KEY = 'cart'

const initialState = {
  // cart: JSON.parse(localStorage.getItem('cart')) || []
  cart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newCart = state.cart.concat(action.book)
      // localStorage.setItem(LS_KEY, JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart
      }
    case actionTypes.EMPTY_CART:
      // localStorage.removeItem(LS_KEY)
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}

export default reducer
