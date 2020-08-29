import React from "react";

import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
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
    <div className={["mt-2 mb-6 flex", props.outerClassName].join(" ")}>
      <div className="p-3 input-group-prepend border border-gray-300">
        <span
          className="input-group-text minus text-base font-medium cursor-pointer"
          onClick={minus}
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

      <input
        className="px-6 py-3 form-control w-full text-base border-t border-b border-gray-300 text-center outline-none"
        min={min}
        max={max}
        name={name}
        readOnly
        placeholder={placeholder ? placeholder : "0"}
        value={`${prefix}${value}${suffix}`}
        onChange={onChange}
      />

      <div className="p-3 input-group-append border border-gray-300">
        <span
          className="input-group-text plus text-base font-medium cursor-pointer"
          onClick={plus}
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
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
