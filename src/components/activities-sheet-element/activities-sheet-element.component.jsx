import { useContext } from "react";
import { ActivitiesContext } from "../../context/activities.context";
import { getActivities, updateActivity } from "../../utils/requests";
import "./activities-sheet-element.styles.scss";
import Button from "../button/button.component";

const ActivitiesSheetElement = ({ todo }) => {
  const { id, user_id, task, operator, done } = todo;
  const { activities, setActivities } = useContext(ActivitiesContext);

  const fetchActivities = async () => {
    const activities = await getActivities();
    setActivities(activities);
  };

  const changeActivity = async () => {
    await updateActivity(id, user_id, task, operator, done);
    await fetchActivities();
  };

  return (
    <div className="sheet-element">
      <div className="sheet-element_info">
        <span className="sheet-element_operator">{operator}</span>
        <span className="sheet-element_task">{task}</span>
      </div>

      <Button buttonType="small" onClick={changeActivity}>
        svolgi
      </Button>
    </div>
  );
};

export default ActivitiesSheetElement;
