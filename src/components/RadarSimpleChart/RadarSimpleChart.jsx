import "./RadarSimpleChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function RadarSimpleChart() {
  return (
    <RadarChart
    className="radar-simple-chart"
    cx={100}
    cy={100}
    outerRadius={65}
    width={200}
    height={200}
    data={data}
    >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <Radar
        name="Mike"
        dataKey="A"
        fill="#FF0101"
        fillOpacity={0.6}
    />
    </RadarChart>
  );
}



