import { useState, Fragment } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./new-activities-form.styles.scss";
import { postActivity } from "../../utils/requests";

const defaultFormFields = {
  task: "",
  operator: "",
};

const NewActivitiesForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { task, operator } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = 101;
    const user_id = 98;

    try {
      await postActivity(id, user_id, task, operator);
      resetFormFields();
      alert("Creata nuova attività");
    } catch (error) {
      console.error(error);
      alert("Attenzione: errore nella creazione della nuova attività");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <h2 className="new-activities-title">NUOVA ATTIVITA'</h2>
      <div className="new-activities-container">
        <form onSubmit={handleSubmit}>
          <div className="new-activities-form-container">
            <FormInput
              label="Descrizione"
              type="text"
              required
              onChange={handleChange}
              name="task"
              value={task}
            ></FormInput>
            <FormInput
              label="Operatore"
              type="text"
              required
              onChange={handleChange}
              name="operator"
              value={operator}
            ></FormInput>
          </div>
          <div className="new-activities-buttons-container">
            <Button type="button" onClick={resetFormFields}>
              Annulla
            </Button>
            <Button type="submit" buttonType="save">
              Salva
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default NewActivitiesForm;
