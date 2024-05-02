"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function getProducts(sort) {
  let url = `${process.env.NEXT_API_URL}/products`;
  if (sort) {
    url = `${process.env.NEXT_API_URL}/products?sort=${sort}`;
  }
  const data = await fetch(url);
  const products = await data.json();
  return products;
}

export async function getProduct(productId) {
  const data = await fetch(`${process.env.NEXT_API_URL}/products/${productId}`);
  const product = await data.json();
  return product;
}

export async function getCategories() {
  const data = await fetch(`${process.env.NEXT_API_URL}/products/categories`);
  const categories = await data.json();
  return categories;
}

export async function getUserById() {
  const id = jwtDecode(cookies().get("user-token").value).sub;
  const response = await fetch(`${process.env.NEXT_API_URL}/users/${id}`);
  const data = response.json();
  return data;
}
