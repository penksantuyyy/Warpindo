import React from "react";

export default function Controller(props) {
  return (
    <section>
      <div className="flex flex-row justify-center">
        <div className="w-3/12">{props.children}</div>
      </div>
    </section>
  );
}
