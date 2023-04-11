import { useContext } from "react";

import { ActivitiesContext } from "../../context/activities.context";
import HistorySheet from "../history-sheet/history-sheet.component";
import Pagination from "../pagination/pagination.component";
import "./history.styles.scss";

const History = ({ completes }) => {
  const { elementsPerPage, currentPage } = useContext(ActivitiesContext);

  const idxOfLastCompleted = elementsPerPage * currentPage;
  const idxOfFirstCompleted = idxOfLastCompleted - elementsPerPage;
  const completedRange = completes.slice(
    idxOfFirstCompleted,
    idxOfLastCompleted
  );

  return (
    <div className="history-container">
      {/* <h1>Attività Completate</h1> */}
      <HistorySheet completes={completedRange} />
      <Pagination />
    </div>
  );
};

export default History;
