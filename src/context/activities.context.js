import { createContext, useState, useEffect } from "react";
import { getActivities, getUsers } from "../utils/requests";

export const ActivitiesContext = createContext({
  activities: [],
  users: [],
  currentPage: 1,
  elementsPerPage: 5,
});

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(5);

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivities();
      setActivities(activities);
    };
    fetchActivities();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const value = {
    activities,
    setActivities,
    users,
    setUsers,
    currentPage,
    setCurrentPage,
    elementsPerPage,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
