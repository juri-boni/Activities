import NavBar from "../navbar/navbar.component";
import Activities from "../activities/activities.component";
import "./main-screen.styles.scss";

const MainScreen = () => {
  return (
    <div className="main-screen-container">
      <NavBar />
      <Activities />
    </div>
  );
};

export default MainScreen;
