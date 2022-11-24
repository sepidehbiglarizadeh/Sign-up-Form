import { Fragment } from "react";

const RadioInput = ({ formik, radioOptions, name }) => {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <Fragment key={item.value}>
          <input
            id={item.value}
            name={name}
            type="radio"
            value={item.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[name] === item.value}
          />
          <label className="radioLablel" htmlFor={item.value}>
            {item.label}
          </label>
        </Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
