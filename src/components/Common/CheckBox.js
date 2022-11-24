import { Fragment } from "react";

const CheckBox = ({ formik, checkBoxOptions, name }) => {
  return (
    <div className="formControl">
      {checkBoxOptions.map((item) => (
        <Fragment key={item.value}>
          <input
            id={item.value}
            name={name}
            type="checkbox"
            value={item.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[name].includes(item.value)}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CheckBox;
