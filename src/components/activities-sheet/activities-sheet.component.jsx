import FormInput from "../form-input/form-input.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = () => {
  return (
    <div className="sheet-container">
      <FormInput label="Filtra per operatore" />
      <div className="sheet-description">
        <span>Attività</span>
        <span>Operatore</span>
      </div>
      <div className="sheet-element">
        <span>report</span>
        <span>Mario Rossi</span>
        <button></button>
      </div>
      <div className="sheet-element">
        <span>report</span>
        <span>Mario Rossi</span>
        <button></button>
      </div>
      <div className="sheet-element">
        <span>report</span>
        <span>Mario Rossi</span>
        <button></button>
      </div>
    </div>
  );
};

export default ActivitiesSheet;
