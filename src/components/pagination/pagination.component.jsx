import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./pagination.styles.scss";

const Pagination = () => {
  const location = useLocation();
  const {
    activitiesCurrentPage,
    setActivitiesCurrentPage,
    historyCurrentPage,
    setHistoryCurrentPage,
  } = useContext(ActivitiesContext);

  const increaseHistoryPageHandler = () => {
    setHistoryCurrentPage(historyCurrentPage + 1);
  };
  const decreaseHistoryPageHandler = () => {
    if (historyCurrentPage === 1) return;
    setHistoryCurrentPage(historyCurrentPage - 1);
  };
  const increaseActivitiesPageHandler = () => {
    setActivitiesCurrentPage(activitiesCurrentPage + 1);
  };
  const decreaseActivitiesPageHandler = () => {
    if (activitiesCurrentPage === 1) return;
    setActivitiesCurrentPage(activitiesCurrentPage - 1);
  };

  return (
    <div className="arrows-container">
      <span
        className="arrow-button"
        onClick={
          location.pathname === "/todos"
            ? decreaseActivitiesPageHandler
            : decreaseHistoryPageHandler
        }
      >
        &#10094;
      </span>
      <span className="page-number">
        {location.pathname === "/todos"
          ? `${activitiesCurrentPage}`
          : `${historyCurrentPage}`}
      </span>
      <span
        className="arrow-button"
        onClick={
          location.pathname === "/todos"
            ? increaseActivitiesPageHandler
            : increaseHistoryPageHandler
        }
      >
        &#10095;
      </span>
    </div>
  );
};

export default Pagination;
