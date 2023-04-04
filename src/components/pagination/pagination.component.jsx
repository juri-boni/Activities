import "./pagination.styles.scss";

const Pagination = () => {
  return (
    <div className="arrows-container">
      <span className="arrow-button">&#10094;</span>
      <span className="page-number">page 1</span>
      <span className="arrow-button">&#10095;</span>
    </div>
  );
};

export default Pagination;
