import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar.jsx";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
