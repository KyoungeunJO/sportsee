import "./LineTinyChart.css";
import { LineChart, Line, XAxis, Tooltip, Rectangle } from "recharts";

const data = [
  {
    name: "L",
    pv: 2400,
  },
  {
    name: "M",
    pv: 1398,
  },
  {
    name: "M",
    pv: 9800,
  },
  {
    name: "J",
    pv: 3908,
  },
  {
    name: "V",
    pv: 4800,
  },
  {
    name: "S",
    pv: 3800,
  },
  {
    name: "D",
    pv: 4300,
  }
];

export default function LineTinyChart() {
  return (
    <LineChart width={200} height={200} data={data} className="linechart">
      <Tooltip
        content={<CustomTooltip />}
        cursor={<CustomCursor />}
      />
    <XAxis dataKey="name" stroke="#FFFF" axisLine={false} tickLine={false} tickSize="16"/>
      <text
          x={0}
          y={20}
          dominantBaseline="middle"
        >
          <tspan x="20" className="linechart-title">Durée moyenne des</tspan>
          <tspan x="20" dy="1.6em" className="linechart-title">sessions</tspan>
        </text>

        <Line 
            width={100}
            height={100}
            type="monotone" 
            dataKey="pv"
            stroke="#FFFF"
            dot={false}
            strokeWidth={2} />
    </LineChart>
    
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
      return (
          <div className="custom-tooltip">
              <p className="custom-tooltip-label">{`${payload[0].value} min`}</p>
          </div>
      )
  }
  return null
}

const CustomCursor = (props) => {
  const { points, width, height } = props
  const { x, y } = points[0]
  return (
      <Rectangle
          fill="#E50000"
          stroke="#E50000"
          x={x}
          y={y - 40}
          width={width + 30}
          height={height + 45}
      />
  )
}