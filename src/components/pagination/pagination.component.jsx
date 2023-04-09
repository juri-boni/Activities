import { useContext } from "react";
import { ActivitiesContext } from "../../context/activities.context";
import "./pagination.styles.scss";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(ActivitiesContext);

  const increaseButtonHandler = () => {
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
      <span className="arrow-button" onClick={handleDecrease}>
        &#10094;
      </span>
      <span className="page-number">Page {currentPage}</span>
      <span className="arrow-button" onClick={handleIncrease}>
        &#10095;
      </span>
    </div>
  );
};

export default Pagination;
