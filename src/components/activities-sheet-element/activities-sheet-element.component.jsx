import Button from "../button/button.component";
import "./activities-sheet-element.styles.scss";

const ActivitiesSheetElement = ({ activity }) => {
  const { id, type, operator } = activity;

  return (
    <div className={`sheet-element ${id % 2 === 0 ? "transparent" : "normal"}`}>
      <div className="sheet-info">
        <span>{type}</span>
        <span>{operator}</span>
      </div>

      <Button buttonType="small">svolgi</Button>
    </div>
  );
};

export default ActivitiesSheetElement;
