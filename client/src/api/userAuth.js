import axios from "axios";
import { SERVER_URL } from "../config/config";

export const registerAPI = async (userData) => {
  const res = await axios.post(`${SERVER_URL}/users/register`, userData, {
    withCredentials: true,
  });
  return res.data;
};

export const loginAPI = async (userData) => {
  const res = await axios.post(`${SERVER_URL}/users/login`, userData, {
    withCredentials: true,
  });
  return res.data;
};

export const isLoggedInAPI = async () => {
  const res = await axios.get(`${SERVER_URL}/users/isLoggedIn`, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutAPI = async () => {
  await axios.get(`${SERVER_URL}/users/logout`, { 
    withCredentials: true,
  });
};