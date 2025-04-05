export function saveUserToLocalStorage({ id, login, name, token }) {
  localStorage.setItem("userId", id);
  localStorage.setItem("userEmail", login);
  localStorage.setItem("userName", name);
  localStorage.setItem("token", token);
}

export function deleteUserFromLocalStorage() {
  localStorage.removeItem("userId");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
  localStorage.removeItem("token");
}

export function getUserDataFromLocalStorage() {
  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const login = localStorage.getItem("userEmail");
  const name = localStorage.getItem("userName");
  if (token === null || token === "" || token === undefined) {
    return null;
  } else {
    return {
      id: id,
      login: login,
      name: name,
      token: token,
    };
  }
}
