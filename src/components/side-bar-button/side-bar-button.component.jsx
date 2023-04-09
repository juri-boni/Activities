import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";
import "./side-bar-button.styles.scss";

const SideBarButton = ({ children, path }) => {
  const { setCurrentPage } = useContext(ActivitiesContext);

  const resetCurrentPage = () => setCurrentPage(1);

  return (
    <div className="side-bar-button-container" onClick={resetCurrentPage}>
      <Link to={path} className="side-bar-button">
        {children}
      </Link>
    </div>
  );
};

export default SideBarButton;
