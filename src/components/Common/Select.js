const Select = ({formik,selectOptions,name}) => {
    return ( 
        <div className="formControl">
        <select name={name} onChange={formik.handleChange} >
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