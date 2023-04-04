import Button from "../button/button.component";
import "./activities-sheet-element.styles.scss";

const ActivitiesSheetElement = ({ todo }) => {
  const { id, user_id, task, done } = todo;

  return (
    <div className={`sheet-element ${id % 2 === 0 ? "transparent" : "normal"}`}>
      <div className="sheet-info">
        <span>{user_id}</span>
        <span>{task}</span>
      </div>

      <Button buttonType="small">svolgi</Button>
    </div>
  );
};

export default ActivitiesSheetElement;
