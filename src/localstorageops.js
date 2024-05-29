export let userGlobalData = {
    id: localStorage.getItem("userId"),
    login: localStorage.getItem("userEmail"),
    name: localStorage.getItem("userName"),
    token: localStorage.getItem("token"),
};

export function setUserGlobalData({id, login, name, token}) {
    userGlobalData = {
        id: id,
        login: login,
        name: name,
        token: token,
    }
}

export function saveUserToLocalStorage({id, login, name, token}){
    localStorage.setItem("userId", id);
    localStorage.setItem("userEmail", login);
    localStorage.setItem("userName", name);
    localStorage.setItem("token", token);
    userGlobalData = {
        id: id,
        login: login,
        name: name,
        token: token,
    };
}

export function deleteUserFromLocalStorage() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    userGlobalData.token = null;
}

export function isUserLoggedIn() {
    let token = localStorage.getItem("token");
    return !(token === null || token === undefined);
}

export function getUserDataFromLocalStorage() {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("userEmail");
    const name = localStorage.getItem("userName");
    if(userGlobalData.id !== id || userGlobalData.login !== login ||
        userGlobalData.name !== name || userGlobalData.token !== token){
        userGlobalData = {
            id: id,
            login: login,
            name: name,
            token: token,
        }
    }
    return {
        id: id,
        login: login,
        name: name,
        token: token,
    };
}