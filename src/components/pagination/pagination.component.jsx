import { useLocation } from "react-router-dom";
import "./pagination.styles.scss";

const Pagination = ({ activitiesCurrentPage, historyCurrentPage }) => {
  const location = useLocation();

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
