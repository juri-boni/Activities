import { useContext } from "react";
import { ActivitiesContext } from "../../context/activities.context";

import NavBar from "../navbar/navbar.component";
import Activities from "../activities/activities.component";
import History from "../history/history.component";
import { useLocation } from "react-router-dom";
import "./main-screen.styles.scss";

const MainScreen = () => {
  const location = useLocation();
  const { activities } = useContext(ActivitiesContext);
  const todos = activities?.filter((activity) => activity.done === false);
  const completed = activities?.filter((activity) => activity.done === true);

  return (
    <div className="main-screen-container">
      <NavBar />
      {location.pathname === "/todos" && <Activities todos={todos} />}
      {location.pathname === "/completed" && <History completed={completed} />}
    </div>
  );
};

export default MainScreen;
