import Button from "../button/button.component";
import "./activities-sheet-element.styles.scss";

const ActivitiesSheetElement = () => {
  return (
    <div className="sheet-element">
      <span>report</span>
      <span>Mario Rossi</span>

      <Button buttonType="small">svolgi</Button>
    </div>
  );
};

export default ActivitiesSheetElement;
