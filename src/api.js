import axios from "axios";
const API_URL = "http://localhost:3001";

export const getUsers = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post(`${API_URL}/users`, user);
  return res.data;
};
export const createStockData = async (stock) => {
  const res = await axios.post(`${API_URL}/stocks`, stock);
  return res.data;
};

export const getStocksData = async () => {
  const res = await axios.get(`${API_URL}/stocks`);
  return res.data;
};
export const deleteStockData = async (id) => {
  const res = await axios.delete(`${API_URL}/stocks/${id}`);
  return res.data;
};
