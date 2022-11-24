const Select = ({ formik, selectOptions, name }) => {
  return (
    <div className="formControl">
      <select name={name} onChange={formik.handleChange} onBlur={formik.handleBlur}>
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Select;
