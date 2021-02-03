import React from "react";

export default function Controller(props) {
  return (
    <div className="pt-4 pb-40 flex flex-col justify-center items-center">
      <div className="flex flex-col">{props.children}</div>
    </div>
  );
}
