import LogoContainer from "../logo-container/logo-container.component";
import "./sidebar.styles.scss";

const SideBar = () => {
  return (
    <nav className="side-bar">
      <LogoContainer />
      <h2>attività da completare</h2>
      <h2>attività completate</h2>
    </nav>
  );
};

export default SideBar;
