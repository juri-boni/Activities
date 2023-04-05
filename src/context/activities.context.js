import { createContext, useState, useEffect } from "react";
import { getUsers, getActivities } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
  activitiesCurrentPage: 1,
  historyCurrentPage: 1,
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState();
  const [activitiesCurrentPage, setActivitiesCurrentPage] = useState(1);
  const [historyCurrentPage, setHistoryCurrentPage] = useState(1);

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
    activitiesCurrentPage,
    setActivitiesCurrentPage,
    historyCurrentPage,
    setHistoryCurrentPage,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
