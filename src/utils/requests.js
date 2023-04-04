export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users");

  return await response.json();
};

export const getActivities = async () => {
  const response = await fetch("http://localhost:3000/todos");
  return await response.json();
};
