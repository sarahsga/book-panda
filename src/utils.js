export const getDiscountedPrice = (originalPrice, discount) => {
  const result = (originalPrice - (discount / 100) * originalPrice).toFixed(2)
  return parseFloat(result)
}

export const getMoneySaved = (originalPrice, discount) => {
  const result = ((discount / 100) * originalPrice).toFixed(2)
  return parseFloat(result)
}
