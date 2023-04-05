import { useState } from "react";
import HistorySheet from "../history-sheet/history-sheet.component";
import Pagination from "../pagination/pagination.component";
import "./history.styles.scss";

const History = ({ completes }) => {
  const [historyCurrentPage, setHistoryCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(5);
  const indexOfLastTask = historyCurrentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentCompletes = completes?.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="history-container">
      <h1>Attività Completate</h1>
      <HistorySheet completes={currentCompletes} />
      <Pagination completes={currentCompletes} />
    </div>
  );
};

export default History;
