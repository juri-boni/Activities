import { createContext, useState, useEffect } from "react";
import { getUsers, getActivities } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
  filteredActivities: [],
  activitiesCurrentPage: 1,
  historyCurrentPage: 1,
  searchField: "",
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState(activities);

  const [activitiesCurrentPage, setActivitiesCurrentPage] = useState(1);
  const [searchField, setSerchField] = useState("");
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
      setFilteredActivities(activities);
    };
    fetchActivities();
  }, []);

  const value = {
    users,
    activities,
    setActivities,
    filteredActivities,
    setFilteredActivities,
    activitiesCurrentPage,
    setActivitiesCurrentPage,
    historyCurrentPage,
    setHistoryCurrentPage,
    searchField,
    setSerchField,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
