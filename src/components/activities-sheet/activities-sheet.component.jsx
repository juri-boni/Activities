import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
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

        <Button buttonType="small">svolgi</Button>
      </div>
      <div className="sheet-element">
        <span>report</span>
        <span>Mario Rossi</span>
        <Button buttonType="small">svolgi</Button>
      </div>
      <div className="sheet-element">
        <span>report</span>
        <span>Mario Rossi</span>
        <Button buttonType="small">svolgi</Button>
      </div>
    </div>
  );
};

export default ActivitiesSheet;
