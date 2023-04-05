const HistorySheetElement = ({ complete }) => {
  const { id, user_id, task, done } = complete;

  return (
    <div className={`sheet-element ${id % 2 === 0 ? "transparent" : "normal"}`}>
      <div className="sheet-info">
        <span>{user_id}</span>
        <span>{task}</span>
      </div>
    </div>
  );
};

export default HistorySheetElement;
