import ActivitiesSheet from "../activities-sheet/activities-sheet.component";
import "./history.styles.scss";

const History = () => {
  return (
    <div className="history-container">
      <h1>Attività Completate</h1>
      <ActivitiesSheet />
    </div>
  );
};

export default History;
