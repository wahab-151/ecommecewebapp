import { ClientURL } from "../../http/config";

export const getAllproductsApi = async () => {
  const res = await ClientURL.get("/product/all-products ");

  return res.data;
};

//mens product
export const getProductByCategoryApi = async (categoryName) => {
  const res = await ClientURL.get(`/product/productbycategory/${categoryName}`);

  return res.data;
};

export const getProductdetailApi = async (id) => {
  const url = `/product/product-detail/${id}`;
  const res = await ClientURL.get(url);
  return res.data;
};
