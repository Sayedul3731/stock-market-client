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
