const Input = ({formik,name,label,type="text"}) => {
  return (
    <div className="formControl">
      <label className="block">{label} :</label>
      <input className="input" type={type}  name={name} value={formik.values[name]} onChange={formik.handleChange} />
    </div>
  );
};

export default Input;
