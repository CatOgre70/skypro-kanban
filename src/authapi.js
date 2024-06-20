const baseUrl = 'https://wedev-api.sky.pro/api/user';

export async function getUserList() {
    const response = await fetch(baseUrl, {
        method: "GET"
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }

    return await response.json();
}

export async function createUser(user) {
    const response = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }

    return await response.json();
}

export async function userLogin(userCredentials) {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }

    return await response.json();
}


