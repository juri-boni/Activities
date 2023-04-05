import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./pagination.styles.scss";

const Pagination = ({ todos, completes }) => {
  const location = useLocation();
  const {
    activitiesCurrentPage,
    setActivitiesCurrentPage,
    historyCurrentPage,
    setHistoryCurrentPage,
  } = useContext(ActivitiesContext);

  const increaseHistoryPageHandler = () => {};
  const decreaseHistoryPageHandler = () => {};
  const increaseActivityPageHandler = () => {};
  const deacreaseActivityPageHandler = () => {};

  return (
    <div className="arrows-container">
      <span className="arrow-button">&#10094;</span>
      <span className="page-number">
        {location.pathname === "/todos"
          ? `${activitiesCurrentPage}`
          : `${historyCurrentPage}`}
      </span>
      <span className="arrow-button">&#10095;</span>
    </div>
  );
};

export default Pagination;
