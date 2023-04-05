import { useState } from "react";

import ActivitiesSheet from "../activities-sheet/activities-sheet.component";
import NewActivitiesForm from "../new-activities-form/new-activities-form.component";
import Pagination from "../pagination/pagination.component";

import "./activities.styles.scss";

const Activities = ({ todos }) => {
  const [activitiesCurrentPage, setActivitiesCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(5);
  const indexOfLastTask = activitiesCurrentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTodos = todos?.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="activities-container">
      <h2>Attività da completare</h2>
      <ActivitiesSheet todos={currentTodos} />
      <Pagination activitiesCurrentPage={activitiesCurrentPage} />
      <NewActivitiesForm />
    </div>
  );
};

export default Activities;
