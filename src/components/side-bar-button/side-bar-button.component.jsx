import "./side-bar-button.styles.scss";

const SideBarButton = ({ children }) => {
  return (
    <div className="side-bar-button-container">
      <button className="side-bar-button">{children}</button>
    </div>
  );
};

export default SideBarButton;
