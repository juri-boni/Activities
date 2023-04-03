import ActivitiesSheet from "../activities-sheet/activities-sheet.component";
import NewActivitiesForm from "../new-activities-form/new-activities-form.component";

import "./activities.styles.scss";

const Activities = () => {
  return (
    <div className="activities-container">
      <h2>Attività da completare</h2>
      <ActivitiesSheet />
      <NewActivitiesForm />
    </div>
  );
};

export default Activities;
