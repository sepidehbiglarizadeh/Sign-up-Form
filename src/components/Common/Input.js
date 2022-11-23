const Input = ({name,label,type="text"}) => {
  return (
    <div className="formControl">
      <label className="block">{label} :</label>
      <input className="input" type={type} name={name}/>
    </div>
  );
};

export default Input;
