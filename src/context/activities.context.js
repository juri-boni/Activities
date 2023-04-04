import { createContext, useState, useEffect } from "react";
import { getUsers, getActivities } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivities();
      setActivities(activities);
    };
    fetchActivities();
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
