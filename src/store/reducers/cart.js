import * as actionTypes from './../actions'
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newCart = state.cart.concat(action.book)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart
      }
    default:
      return state
  }
}

export default reducer
