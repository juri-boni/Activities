import NavBar from "../navbar/navbar.component";
import Activities from "../activities/activities.component";
import History from "../history/history.component";
import { useLocation } from "react-router-dom";
import "./main-screen.styles.scss";

const MainScreen = () => {
  const location = useLocation();

  return (
    <div className="main-screen-container">
      <NavBar />
      {location.pathname === "/todos" && <Activities />}
      {location.pathname === "/completed" && <History />}
    </div>
  );
};

export default MainScreen;
