import { createContext, useState, useEffect } from "react";
import { getActivities } from "../utils/requests";

export const ActivitiesContext = createContext({
  users: [],
  activities: [],
  filteredActivities: [],
  currentPage: 1,
  elementsPerPage: 5,
});

export const ActivitiesProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(5);

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivities();
      setActivities(activities);
      // setFilteredActivities(activities);
    };
    fetchActivities();
  }, []);

  useEffect(() => {
    setFilteredActivities(activities);
    console.log(filteredActivities);
  });

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const users = await getUsers();
  //     setUsers(users);
  //   };
  //   fetchUsers();
  // }, []);

  const value = {
    activities,
    setActivities,
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
