"use server";

import { cookies } from "next/headers";

export async function getCookiesValue(key) {
  const value = cookies().get(key);
  if (value) {
    return value;
  }
  return null;
}

export async function setCookiesValue(key, value) {
  cookies().set(key, value);
}
