import { Fragment } from "react";

const CheckBox = ({checkBoxOptions,name}) => {
  return (
    <div className="formControl">
      {checkBoxOptions.map((item) => (
        <Fragment key={item.value}>
          <input id={item.value} name={name} type="checkbox" value={item.value} />
          <label htmlFor={item.value}>{item.label}</label>
        </Fragment>
      ))}
    </div>
  );
};

export default CheckBox;