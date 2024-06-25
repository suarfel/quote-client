import axios from "./axios";
import { useDispatch } from "react-redux";
import { navActions } from "../store/home";
import { API } from "../environment";

const DOMAIN_URL = "/api/auth/register";
const url = "http://localhost:5181/api/auth/register";
const token = localStorage.getItem("token");

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
  console.log(data);
  return data;
};

export const AllQuotes = async () => {
  const response = await fetch(`${API}api/Quote/AllWithTimeOrder`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to procees the request");
  }

  return data;
};

export const LikeQuote = async (likeData) => {
  const response = await fetch(`${API}api/Like`, {
    method: "POST",
    body: JSON.stringify(likeData),
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to process the request");
  }

  return data;
};

export const DislikeQuote = async (dislikeData) => {
  const response = await fetch(`${API}api/Like/remove/${dislikeData.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to process the request");
  }
};

export const QuoteDetail = async (quoteId) => {
  const response = await fetch(`${API}api/Quote/${quoteId}`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to make the request");
  }

  return data;
};
