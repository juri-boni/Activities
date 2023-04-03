import FormInput from "../form-input/form-input.component";
import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = () => {
  return (
    <div className="sheet-container">
      <FormInput label="Filtra per operatore" />
      <div className="sheet-description">
        <span>Attività</span>
        <span>Operatore</span>
      </div>
      <ActivitiesSheetElement />
      <ActivitiesSheetElement />
      <ActivitiesSheetElement />
    </div>
  );
};

export default ActivitiesSheet;
