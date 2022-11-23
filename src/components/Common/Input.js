const Input = ({name,label,type="text"}) => {
  return (
    <div>
      <label>{label} :</label>
      <input type={type} name={name}/>
    </div>
  );
};

export default Input;
