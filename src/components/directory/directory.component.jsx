import SideBar from "../sidebar/sidebar.component";
import MainScreen from "../main-screen/main-screen.component";

import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      <SideBar />
      <MainScreen />
    </div>
  );
};

export default Directory;
