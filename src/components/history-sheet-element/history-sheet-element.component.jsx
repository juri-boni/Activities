const HistorySheetElement = ({ complete }) => {
  const { id, user_id, task, operator, done } = complete;

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
