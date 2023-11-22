import { ClientURL } from "../../http/config";
export const addProductToCartApi = async ({ userId, quantity, productId }) => {
    const url = "/cart/add-to-cart";
    const res = await ClientURL.post(url,{ userId, quantity, productId });
    return res.data;
  };
  export const getCartItemsApi = async (userId) => {
    const url = `/cart/get-cart-items/${userId}`;
    const res = await ClientURL.get(url);
    return res.data;
  };

  export const deleteCartItemApi = async ({userId,productId}) => {
    const url = `/cart/delete-from-cart`;
    const res = await ClientURL.delete(url,{ data: { userId, productId } });
    return res.data;
  };