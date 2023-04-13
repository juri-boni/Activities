import { useContext } from "react";

import { ActivitiesContext } from "../../context/activities.context";
import ActivitiesSheet from "../activities-sheet/activities-sheet.component";
import NewActivitiesForm from "../new-activities-form/new-activities-form.component";
import Pagination from "../pagination/pagination.component";

import "./activities.styles.scss";

const Activities = ({ todos }) => {
  const { elementsPerPage, currentPage } = useContext(ActivitiesContext);
  const todosPages = Math.ceil(todos.length / elementsPerPage);
  const idxOfLastTodo = elementsPerPage * currentPage;
  const idxOfFirstTodo = idxOfLastTodo - elementsPerPage;
  const todoRange = todos.slice(idxOfFirstTodo, idxOfLastTodo);

  return (
    <div className="activities-container">
      <ActivitiesSheet todos={todoRange} />
      <Pagination todosPages={todosPages} />
      <NewActivitiesForm />
    </div>
  );
};

export default Activities;
