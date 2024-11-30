import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Altitude(props) {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["Altitude"],
            scaleType: "band",
          },
        ]}
        yAxis={[
          {
            id: "yAxis",
            min: 0,
            max: 3500,
          },
        ]}
        series={[
          {
            data: [props.altitude],
          },
        ]}
        width={250}
        height={300}
      />
    </div>
  );
}
