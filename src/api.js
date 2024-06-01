export async function getTaskList(token) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}