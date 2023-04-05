import { useState } from "react";

const HistorySheetElement = ({ complete }) => {
  const { id, user_id, task, operator, done } = complete;
  const [searchHistoryField, setSearchHistoryField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();

    setSearchHistoryField(searchFieldString);
  };

  return (
    <div className={`sheet-element ${id % 2 === 0 ? "transparent" : "normal"}`}>
      <div className="sheet-element_info">
        <span className="sheet-element_operator">{operator}</span>
        <span className="sheet-element_task">{task}</span>
      </div>
    </div>
  );
};

export default HistorySheetElement;
