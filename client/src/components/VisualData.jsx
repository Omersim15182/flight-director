import React from "react";
import Compass from "./compass";
import Altitude from "./Altitude";
import Adi from "./Adi";

export default function VisualData(props) {
  return (
    <div className="visual-data">
      <Altitude altitude={props.altitude}></Altitude>
      <Compass compass={props.compass}></Compass>
      <Adi horizontalAngle={props.horizontalAngle}></Adi>
    </div>
  );
}
