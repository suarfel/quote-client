import axios from "./axios";
import { useDispatch } from "react-redux";
import { navActions } from "../store/home";
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
    throw new Error(data.message || "Could not create song.");
  }
  return null;
}

export const login = async (userData) => {};
