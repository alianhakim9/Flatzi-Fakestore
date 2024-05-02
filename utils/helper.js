import { sha512 } from "sha512-crypt-ts";

export function generateOrderId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let orderId = "order_";
  for (let i = 0; i < 10; i++) {
    orderId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return orderId;
}

export function generateSHA512Hash(data) {
  return sha512.crypt(data, "Wb8DSYC=v0lX?_3!");
}
