import FormInput from "../form-input/form-input.component";
import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = ({ todos }) => {
  console.log(todos);
  return (
    <div className="sheet-container">
      <FormInput label="Filtra per operatore" />
      <div className="sheet-description">
        <span className="sheet-description_activity">Attività</span>
        <span>Operatore</span>
      </div>

      {todos?.map((todo) => (
        <ActivitiesSheetElement key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ActivitiesSheet;
