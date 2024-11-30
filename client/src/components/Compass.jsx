import React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

export default function Compass(props) {
  return (
    <div>
      <GaugeContainer
        width={200}
        height={200}
        startAngle={0}
        endAngle={360}
        value={(props.compass * 100) / 360} // replace the value in the first argument(90)
      >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>
    </div>
  );
}

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}
