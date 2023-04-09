import { createContext, useState, useEffect } from "react";
import { getUsers, getActivities } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
  filteredActivities: [],
  currentPage: 1,
  searchField: "",
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState([]);
  const [searchField, setSerchField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
    setActivities,

    currentPage,
    setCurrentPage,
    searchField,
    setSerchField,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
