import HistorySheet from "../history-sheet/history-sheet.component";
import Pagination from "../pagination/pagination.component";
import "./history.styles.scss";

const History = ({ completes }) => {
  return (
    <div className="history-container">
      <h1>Attività Completate</h1>
      <HistorySheet completes={completes} />
      <Pagination />
    </div>
  );
};

export default History;
