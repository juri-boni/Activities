import Button from "../button/button.component";
import { updateActivity } from "../../utils/requests";
import "./activities-sheet-element.styles.scss";

const ActivitiesSheetElement = ({ todo }) => {
  const { id, user_id, task, operator, done } = todo;

  const changeActivity = async () => {
    await updateActivity(id, user_id, task, operator, done);
  };

  return (
    <div className={`sheet-element ${id % 2 === 0 ? "transparent" : "normal"}`}>
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
