import React from "react";

export default function Adi(props) {
  console.log("horizontalAngle", props.horizontalAngle);

  let backgroundColor =
    props.horizontalAngle === "100"
      ? "green"
      : props.horizontalAngle === "0"
      ? "blue"
      : "#bbb";
  console.log("bakc", backgroundColor);

  return <div className="dot" style={{ backgroundColor }}></div>;
}
