export async function getTaskList() {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}