import FormInput from "../form-input/form-input.component";
import "./new-activities-form.styles.scss";

const NewActivitiesForm = () => {
  return (
    <div className="new-activities-container">
      <h2 className="new-activities-title">NUOVA ATTIVITA'</h2>
      <div className="new-activities-form-container">
        <FormInput label="Descrizione"></FormInput>
        <FormInput label="Operatore"></FormInput>
      </div>
    </div>
  );
};

export default NewActivitiesForm;