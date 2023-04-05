import { useState, useContext, useEffect } from "react";
import { ActivitiesContext } from "../../context/activities.context";
import FormInput from "../form-input/form-input.component";
import HistorySheetElement from "../history-sheet-element/history-sheet-element.component";
import SearchBox from "../search-box/search-box.component";

const HistorySheet = ({ completes }) => {
  const { filteredActivities, setFilteredActivities } =
    useContext(ActivitiesContext);

  const [searchActivitiesField, setSearchActivitiesField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();

    setSearchActivitiesField(searchFieldString);
  };

  useEffect(() => {
    const filteredCompletes = completes?.filter((complete) => {
      return complete.operator.toLowerCase().includes(searchActivitiesField);
    });
    setFilteredActivities(filteredCompletes);
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

      {completes?.map((complete) => (
        <HistorySheetElement key={complete.id} complete={complete} />
      ))}
    </div>
  );
};

export default HistorySheet;
