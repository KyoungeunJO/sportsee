import "./BarTinyChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1",
    "Poids (kg)" : 69.5,
    "Calories brûlées (kCal)" : 302
  },
  {
    name: "2",
    "Poids (kg)": 70.1,
    "Calories brûlées (kCal)": 335
  },
  {
    name: "3",
    "Poids (kg)": 71.5,
    "Calories brûlées (kCal)": 356
  },
  {
    name: "4",
    "Poids (kg)": 68.3,
    "Calories brûlées (kCal)": 367
  },
  {
    name: "5",
    "Poids (kg)": 69.7,
    "Calories brûlées (kCal)": 355
  },
  {
    name: "6",
    "Poids (kg)": 68.9,
    "Calories brûlées (kCal)": 370
  },
  {
    name: "7",
    "Poids (kg)": 69,
    "Calories brûlées (kCal)": 355
  },
  {
    name: "8",
    "Poids (kg)": 70.5,
    "Calories brûlées (kCal)": 370,
  },
  {
    name: "9",
    "Poids (kg)": 70.1,
    "Calories brûlées (kCal)": 390
  },
  {
    name: "10",
    "Poids (kg)": 68.7,
    "Calories brûlées (kCal)": 405
  }
];

export default function BarTinyChart() {
  return (
    <div className="barchart">
      <BarChart
        width={700}
        height={200}
        data={data}
        margin={{
          top: 35,
          right: 20,
          left: 30,
          bottom: 5
        }}
      >
        <Tooltip
        content={<CustomTooltip />}
      />
        <text x="30" y="25">Activités quotidiennes</text>
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis  orientation="right" interval="preserveStartEnd" />
        <Tooltip />
        <Legend layout="horizontal" 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                iconSize="8"
                width={300}
                wrapperStyle={{
                  top: 10,
                  left: 470,
                }} />
                
        <Bar legendType="circle" dataKey="Poids (kg)" fill="#282D30" radius={[10, 10, 0, 0]} barSize={8}/>
        <Bar legendType="circle" dataKey="Calories brûlées (kCal)" fill="#E60000" radius={[10, 10, 0, 0]} barSize={8}/>
      </BarChart>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
      return (
          <div className="custom-tooltip-bar">
              <p className="custom-tooltip-label-bar">{`${payload[1].value}kg`}</p>
              <p className="custom-tooltip-label-bar">{`${payload[0].value}Kcal`}</p>
          </div>
      )
  }
  return null
}