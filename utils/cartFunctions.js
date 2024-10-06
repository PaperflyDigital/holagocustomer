import { store } from "@/redux/store";
import { FetchApi } from "./FetchApi";
import { refetchCartState } from "./functions";

const { setCart, setCartProducts } = require("@/redux/slices/CartSlice");

export const increaseQtyInCart = async (item, qty) => {
  const auth = store.getState((state) => state).auth.user;
  const body = {
    product_id: item?.product?.id,
    quantity: item?.quantity + qty,
    color: item?.color,
    size: item?.size,
  };
  await FetchApi({
    url: `cart/api/cart_manage/${auth?.customer?.id}/update/${item?.id}/`,
    body,
    method: "put",
  });
  refetchCartState(auth);
};
export const decreaseQtyInCart = async (item, qty) => {
  const auth = store.getState((state) => state).auth.user;
  const body = {
    product_id: item?.product?.id,
    quantity: item?.quantity - qty,
    color: item?.color,
    size: item?.size,
  };
  if (body.quantity <= 0) {
    await FetchApi({
      url: `cart/api/cart_manage/${auth?.customer?.id}/delete/${item?.id}/`,
      body,
      method: "delete",
    });
  } else {
    await FetchApi({
      url: `cart/api/cart_manage/${auth?.customer?.id}/update/${item?.id}/`,
      body,
      method: "put",
    });
  }
  refetchCartState(auth);
};
export const removeItemFromCart = (cart, index, dispatch) => {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  dispatch(setCartProducts(updatedCart));
  return updatedCart;
};
