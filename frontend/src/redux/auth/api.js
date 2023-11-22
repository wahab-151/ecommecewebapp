import { ClientURL } from "../../http/config";

export const loginApi = async (payload) => {
  const res = await ClientURL.post("auth/login", payload);
  return res;
};

export const checkSessionApi = async (payload) => {
  const res = await ClientURL.get("api/admin/checkSession", {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });

  return res;
};
