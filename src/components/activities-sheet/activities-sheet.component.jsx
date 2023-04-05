import { useState, useEffect, useContext } from "react";
import { ActivitiesContext } from "../../context/activities.context";
import FormInput from "../form-input/form-input.component";
import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import SearchBox from "../search-box/search-box.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = ({ todos }) => {
  const { filteredActivities, setFilteredActivities } =
    useContext(ActivitiesContext);
  const [searchActivitiesField, setSearchActivitiesField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();

    setSearchActivitiesField(searchFieldString);
  };

  useEffect(() => {
    const filteredTodos = todos?.filter((todo) => {
      return todo.operator.toLowerCase().includes(searchActivitiesField);
    });
    setFilteredActivities(filteredTodos);
    // console.log(filteredTodos);
  }, [searchActivitiesField]);

  return (
    <div className="sheet-container">
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Filtra per operatore"
      />
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
