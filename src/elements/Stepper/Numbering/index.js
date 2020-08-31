import React from "react";

import propTypes from "prop-types";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);

  return (
    <ol
      className={["stepper flex items-center justify-center", className].join(
        " "
      )}
      style={style}
    >
      {KeysOfData.map((list, index) => {
        let isActive = list === current ? "active" : "";
        if (index + 1 === KeysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li
            key={`list-${index}`}
            className={
              (`relative flex items-center justify-center w-12 h-12 rounded-full text-white`,
              [isActive].join(" "))
            }
          >
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
