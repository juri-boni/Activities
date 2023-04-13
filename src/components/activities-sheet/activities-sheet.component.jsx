import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = ({ todos, todosPage, todosNumber }) => {
  return (
    <div className="sheet-container">
      <div className="sheet-description">
        <span className="sheet-description_activity">Operatore</span>
        <span className="sheet-description_activity">{`Attività (${todosNumber})`}</span>
      </div>

      {todos?.map((todo) => (
        <ActivitiesSheetElement key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ActivitiesSheet;
