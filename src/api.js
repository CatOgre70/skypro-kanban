const baseUrl = "https://wedev-api.sky.pro/api/kanban";

export async function getTaskList(token) {
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function createTask(token, newTask) {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newTask),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
}
