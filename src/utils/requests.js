const actvitiesURL = "http://localhost:3000/todos";

export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users");

  return await response.json();
};

export const getActivities = async () => {
  const response = await fetch(`${actvitiesURL}`);
  return await response.json();
};

export const updateActivity = async (id, user_id, task, operator, done) => {
  const response = await fetch(`${actvitiesURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      user_id: user_id,
      task: task,
      operator: operator,
      done: !done,
    }),
  });

  const resData = await response.json();
  return resData;
};
