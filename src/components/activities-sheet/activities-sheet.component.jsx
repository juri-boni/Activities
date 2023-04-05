import FormInput from "../form-input/form-input.component";
import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import SearchBox from "../search-box/search-box.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = ({ todos }) => {
  return (
    <div className="sheet-container">
      <SearchBox placeholder="Filtra per operatore" />
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
