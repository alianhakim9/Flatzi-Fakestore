import Cookies from "js-cookie";

export async function handleLogin(username, password) {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      Cookies.set("user-token", json.token);
    });
  return response;
}

export async function handleLogout() {
  Cookies.remove("user-token");
  Cookies.remove("userId");
  return true;
}
