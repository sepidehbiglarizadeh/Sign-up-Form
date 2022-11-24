const TermsCheckBox = ({ formik, name }) => {
  return (
    <div className="formControl">
      <input
        type="checkbox"
        name={name}
        value={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.terms}
      />
      <label>Terms and Conditions</label>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default TermsCheckBox;
