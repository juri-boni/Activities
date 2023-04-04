import ActivitiesSheet from "../activities-sheet/activities-sheet.component";
import NewActivitiesForm from "../new-activities-form/new-activities-form.component";
import Pagination from "../pagination/pagination.component";

import "./activities.styles.scss";

const Activities = ({ todos }) => {
  return (
    <div className="activities-container">
      <h2>Attività da completare</h2>
      <ActivitiesSheet todos={todos} />
      <Pagination />
      <NewActivitiesForm />
    </div>
  );
};

export default Activities;
