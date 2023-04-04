import { createContext, useState, useEffect } from "react";
import { getUsers } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState();
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const value = {
    users,
    activities,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
