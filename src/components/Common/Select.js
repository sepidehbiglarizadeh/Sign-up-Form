const Select = ({selectOptions,name}) => {
    return ( 
        <div className="formControl">
        <select name={name}>
          {selectOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
     );
}
 
export default Select;