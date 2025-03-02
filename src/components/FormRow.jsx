export const FormRow = ({ labelName, type, name, isRequired }) => {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelName}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          required={isRequired}
        />
      </div>
    </>
  );
};

export default FormRow;
