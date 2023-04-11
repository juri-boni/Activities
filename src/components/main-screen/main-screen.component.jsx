import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesContext } from "../../context/activities.context";

import NavBar from "../navbar/navbar.component";
import SearchBox from "../search-box/search-box.component";
import Activities from "../activities/activities.component";
import History from "../history/history.component";
import "./main-screen.styles.scss";

const MainScreen = () => {
  const location = useLocation();
  const { activities } = useContext(ActivitiesContext);

  const todos = activities?.filter((activity) => activity.done === false);

  const completes = activities?.filter((activity) => activity.done === true);

  return (
    <div className="main-screen-container">
      <NavBar />
      {location.pathname === "/todos" && (
        <h2 className="section-title">Attività da completare</h2>
      )}
      {location.pathname === "/completed" && (
        <h2 className="section-title">Attività completate</h2>
      )}
      <div className="searchbox-container">
        {location.pathname !== "/" && (
          <SearchBox placeholder="Filtra per operatore" />
        )}
      </div>
      {location.pathname === "/todos" && <Activities todos={todos} />}
      {location.pathname === "/completed" && <History completes={completes} />}
    </div>
  );
};

export default MainScreen;
