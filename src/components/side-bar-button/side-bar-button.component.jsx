import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./side-bar-button.styles.scss";

const SideBarButton = ({ children, path }) => {
  const location = useLocation();
  const { setCurrentPage } = useContext(ActivitiesContext);

  const resetCurrentPage = () => setCurrentPage(1);

  return (
    <div
      className={`side-bar-button-container ${
        location.pathname === path && "active"
      }`}
      onClick={resetCurrentPage}
    >
      <div
        className={`active-bar ${location.pathname === path && "redbar"}`}
      ></div>
      <Link to={path} className="side-bar-button">
        {children}
      </Link>
    </div>
  );
};

export default SideBarButton;
