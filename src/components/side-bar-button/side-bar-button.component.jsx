import { Link } from "react-router-dom";

import "./side-bar-button.styles.scss";

const SideBarButton = ({ children, path }) => {
  return (
    <div className="side-bar-button-container">
      <Link to={path} className="side-bar-button">
        {children}
      </Link>
    </div>
  );
};

export default SideBarButton;
