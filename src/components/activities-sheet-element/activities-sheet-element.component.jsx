import Button from "../button/button.component";
import "./activities-sheet-element.styles.scss";

const ActivitiesSheetElement = ({ activity }) => {
  const { type, operator } = activity;

  return (
    <div className="sheet-element">
      <span>{type}</span>
      <span>{operator}</span>

      <Button buttonType="small">svolgi</Button>
    </div>
  );
};

export default ActivitiesSheetElement;
