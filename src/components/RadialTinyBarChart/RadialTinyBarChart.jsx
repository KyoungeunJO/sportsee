import "./RadialTinyBarChart.css"
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { useState } from "react";

const data = [
  {
    uv: 100,
    fill: "#FFFFFF"
  },
  {
    uv: 68,
    fill: "#FF0000"
  }
];

const style = {
  top: 0,
  left: 350,
};

export default function RadialTinyBarChart() {

  const [completion, setCompletion] = useState(0)

  return (
    <RadialBarChart
      className="radial-svg"
      width={200}
      height={200}
      cx={100}
      cy={100}
      innerRadius={75}
      outerRadius={75}
      barSize={8}
      data={data}
      startAngle={90}
      endAngle={450}
    >
      <text
        x={30}
        y={15}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-title"
      >
        Score
      </text>
      <RadialBar
        y="500"
        minAngle={1}
        background={{ fill: "#FBFBFB" }}
        clockWise
        dataKey="uv"
        cornerRadius={15}
      />
      <text
        x={100}
        y={70}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
      >
        <tspan x="100" className="objective-metric">{`${completion}%`}</tspan>
        <tspan x="100" dy="1.6em" className="objective-text">de votre</tspan>
        <tspan x="100" dy="1.6em" className="objective-text">objectif</tspan>
      </text>
    </RadialBarChart>
  );
}
