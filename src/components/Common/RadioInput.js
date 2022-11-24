import { Fragment } from "react";

const RadioInput = ({formik, radioOptions, name }) => {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <Fragment key={item.value}>
          <input id={item.value} name={name} type="radio" value={item.value} onChange={formik.handleChange}/>
          <label className="radioLablel" htmlFor={item.value}>{item.label}</label>
        </Fragment>
      ))}
    </div>
  );
};

export default RadioInput;
