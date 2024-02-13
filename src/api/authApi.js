import axios from "./axios";
import { useDispatch } from "react-redux";
import { navActions } from "../store/home";
import { API } from "../environment";

const DOMAIN_URL = "/api/auth/register";
const url = "http://localhost:5181/api/auth/register";
export async function Register(userData) {
  console.log(userData);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });


  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Unable to create User.");
  }
  return null;
}

export const Login = async (userData) => {
  console.log(userData);
  const response = await fetch(`${API}api/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to process the request");
  }
  return data;
};
