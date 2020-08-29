import React from "react";

import propTypes from "prop-types";
import Button from "elements/Button";

export default function Breadcrumb(props) {
  const className = ["breadcrumb", props.className];
  return (
    <nav
      aria-label="breadcrumb"
      className="py-4 px-20 border-b border-gray-300"
    >
      <ol className={className.join(" ") + `flex items-center text-sm`}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === props.data.length - 1 ? " active" : ""
              }`}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button
                  className="flex items-center text-gray-500"
                  type="link"
                  href={item.pageHref}
                >
                  {item.pageTitle}
                  <span>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mx-6 chevron-right w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
