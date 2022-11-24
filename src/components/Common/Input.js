const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="formControl">
      <label className="block">{label} :</label>
      <input
        className="input"
        type={type}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
