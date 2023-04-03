import SideBarButton from "../side-bar-button/side-bar-button.component";

import LogoContainer from "../logo-container/logo-container.component";
import "./sidebar.styles.scss";

const SideBar = () => {
  return (
    <nav className="side-bar">
      <LogoContainer />
      <SideBarButton>Attività da completare</SideBarButton>
      <SideBarButton>Attività completate</SideBarButton>
    </nav>
  );
};

export default SideBar;
