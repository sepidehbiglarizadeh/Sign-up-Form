const TermsCheckBox = ({formik,name}) => {
  return (
    <div className="formControl">
      <input type="checkbox" name={name} value={true} onChange={formik.handleChange}/>
      <label>Terms and Conditions</label>
    </div>
  );
};

export default TermsCheckBox;
