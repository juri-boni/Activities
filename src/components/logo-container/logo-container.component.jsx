import { Link } from "react-router-dom";
import "./logo-container.styles.scss";

const LogoContainer = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo">
        LOGO
      </Link>
    </div>
  );
};

export default LogoContainer;
