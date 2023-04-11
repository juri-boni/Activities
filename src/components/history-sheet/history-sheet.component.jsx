import HistorySheetElement from "../history-sheet-element/history-sheet-element.component";

const HistorySheet = ({ completes }) => {
  return (
    <div className="sheet-container">
      {/* <SearchBox placeholder="Filtra per operatore" /> */}
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
