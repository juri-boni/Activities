import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./pagination.styles.scss";

const Pagination = ({ todosPages, historyPage }) => {
  const location = useLocation();
  const { currentPage, setCurrentPage } = useContext(ActivitiesContext);

  const increaseButtonHandler = () => {
    if (location.pathname === "/todos" && currentPage === todosPages) return;
    if (location.pathname === "/completed" && currentPage === historyPage)
      return;
    setCurrentPage(currentPage + 1);
  };

  const decreaseButtonHandler = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleIncrease = () => increaseButtonHandler();
  const handleDecrease = () => decreaseButtonHandler();

  return (
    <div className="arrows-container">
      {currentPage !== 1 && (
        <span className="arrow-button" onClick={handleDecrease}>
          &#10094;
        </span>
      )}

      <span className="page-number">Page {currentPage}</span>

      {location.pathname === "/todos" && currentPage < todosPages && (
        <span className="arrow-button" onClick={handleIncrease}>
          &#10095;
        </span>
      )}

      {location.pathname === "/completed" && currentPage < historyPage && (
        <span className="arrow-button" onClick={handleIncrease}>
          &#10095;
        </span>
      )}
    </div>
  );
};

export default Pagination;
