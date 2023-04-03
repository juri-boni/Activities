import FormInput from "../form-input/form-input.component";
import ActivitiesSheetElement from "../activities-sheet-element/activities-sheet-element.component";
import "./activities-sheet.styles.scss";

const ActivitiesSheet = () => {
  const activities = [
    {
      id: 1,
      type: "Report",
      operator: "Mario Rossi",
    },
    {
      id: 2,
      type: "Report",
      operator: "Luca Bianchi",
    },
    {
      id: 3,
      type: "Manutenzione",
      operator: "Luca Bianchi",
    },
    {
      id: 4,
      type: "Manutenzione",
      operator: "Mario Rossi",
    },
    {
      id: 1,
      type: "Report",
      operator: "Mario Rossi",
    },
  ];

  return (
    <div className="sheet-container">
      <FormInput label="Filtra per operatore" />
      <div className="sheet-description">
        <span>Attività</span>
        <span>Operatore</span>
      </div>

      {activities.map((activity) => (
        <ActivitiesSheetElement key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivitiesSheet;
