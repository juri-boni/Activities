import { useContext, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./pagination.styles.scss";

const Pagination = ({ todosPages, historyPage }) => {
  const location = useLocation();
  const { currentPage, setCurrentPage, setElementsPerPage } =
    useContext(ActivitiesContext);

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
    <Fragment>
      <div className="pagination-container">
        <div className="elements-number-container">
          <div className="element-number">
            <button onClick={() => setElementsPerPage(5)}>5</button>
          </div>
          <div className="element-number">
            <button onClick={() => setElementsPerPage(6)}>6</button>
          </div>
          <div className="element-number">
            <button onClick={() => setElementsPerPage(7)}>7</button>
          </div>
          <div className="element-number">
            <button onClick={() => setElementsPerPage(8)}>8</button>
          </div>
        </div>
        <div className="arrows-container">
          <div className="arrow-container">
            {currentPage !== 1 && (
              <span className="arrow-button" onClick={handleDecrease}>
                &#10094;
              </span>
            )}
          </div>

          <div className="page-number-container">
            <span className="page-number">
              {`
            ${currentPage} /
            ${location.pathname === "/todos" ? todosPages : historyPage}
          
          `}
            </span>
          </div>
          <div className="arrow-container">
            {location.pathname === "/todos" && currentPage < todosPages && (
              <span className="arrow-button" onClick={handleIncrease}>
                &#10095;
              </span>
            )}

            {location.pathname === "/completed" &&
              currentPage < historyPage && (
                <span className="arrow-button" onClick={handleIncrease}>
                  &#10095;
                </span>
              )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
