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

  try {
    if (response.ok) {
      const data = await response.json();
    } else {
      const errorData = await response.json();
      let errorMessage = "Authentication Failed";

      if (errorData && errorData.error && errorData.error.errorMessage) {
        errorMessage = errorData.error.errorMessage;
      }

      alert(errorMessage);
    }
  } catch (err) {
    alert(err.errorMessage);
  }

  return null;
}

export const login = async (userData) => {};
