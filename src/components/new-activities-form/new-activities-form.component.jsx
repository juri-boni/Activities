import { useState, useContext, Fragment } from "react";
import { ActivitiesContext } from "../../context/activities.context";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./new-activities-form.styles.scss";
import { postActivity, getActivities } from "../../utils/requests";

const defaultFormFields = {
  task: "",
  name: "",
};

const NewActivitiesForm = () => {
  const { activities, setActivities, users } = useContext(ActivitiesContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { task, name } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const fetchActivities = async () => {
    const activities = await getActivities();
    setActivities(activities);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const existingUser = users.find((user) => user.firstname === name);
    const id = activities.length + 1;
    const user_id = existingUser ? existingUser.id : users.length + 1;
    console.log(user_id);
    const operator = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    try {
      await postActivity(id, user_id, task, operator);
      await fetchActivities();
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
              name="name"
              value={name}
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
