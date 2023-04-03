import Activities from "../activities/activities.component";
import SideBar from "../sidebar/sidebar.component";
import NavBar from "../navbar/navbar.component";
import './directory.styles.scss'

const Directory = () => {
  return (
    <div className="directory-container">
      <Activities />
      <SideBar />
      <NavBar />
    </div>
  );
};

export default Directory;
