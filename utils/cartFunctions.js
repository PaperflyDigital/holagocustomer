const { setCart, setCartProducts } = require("@/redux/slices/CartSlice");

export const increaseQtyInCart = (cart, index, qty, dispatch) => {
  const updatedCart = [...cart];
  updatedCart[index] = {
    ...updatedCart[index],
    quantity: updatedCart[index].quantity + qty,
  };
  dispatch(setCartProducts(updatedCart));
  return updatedCart;
};
export const decreaseQtyInCart = (cart, index, qty, dispatch) => {
  const updatedCart = [...cart];
  if (updatedCart[index].quantity <= qty) {
    updatedCart.splice(index, 1);
  } else {
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity - qty,
    };
  }
  dispatch(setCartProducts(updatedCart));
  return updatedCart;
};
export const removeItemFromCart = (cart, index, dispatch) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    dispatch(setCartProducts(updatedCart));
    return updatedCart;
  };
  