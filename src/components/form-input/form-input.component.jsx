import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="entryarea">
      <input className="form-input" {...otherProps} />
      {label && <label className="labelline">{label}</label>}
    </div>
  );
};

export default FormInput;
