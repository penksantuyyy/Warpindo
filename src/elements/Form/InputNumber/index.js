import React, { useState } from "react";

import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumberic = new RegExp("[0-9]*");
    const isNumeric = patternNumberic.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}`);
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["mb-3 flex", props.outerClassName].join(" ")}>
      <div className="px-4 py-4 input-group-prepend border border-gray-300">
        <span
          className="input-group-text minus text-base font-medium cursor-pointer"
          onClick={minus}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="plus w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
      </div>

      <input
        className="px-6 py-4 form-control w-32 font-medium text-base border-t border-b border-gray-300 text-center"
        min={min}
        max={max}
        name={name}
        pattern="[0-9]*"
        placeholder={placeholder ? placeholder : "0"}
        value={String(InputValue)}
        onChange={onChange}
      />

      <div className="px-4 py-4 input-group-append border border-gray-300">
        <span
          className="input-group-text plus text-base font-medium cursor-pointer"
          onClick={plus}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="minus w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18 12H6"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 30,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
