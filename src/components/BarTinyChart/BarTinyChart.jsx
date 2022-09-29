import "./BarTinyChart.css";
import PropTypes from 'prop-types'
import useUserActivity from '../../services/useUserActivity';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

/**
 * Component displaying daily activity kilogram and calories burned.
 * 
 * @component
 */
function BarTinyChart() {

  let {sessions} = useUserActivity({})

  sessions = sessions?.map(e => {
    e["Poids (kg)"] = e.kilogram,
    e["Calories brûlées (kCal)"] = e.calories
    return e
  })

  return (
    <>
    {sessions &&
    <>
    <div className="barchart">
      <BarChart
        width={700}
        height={200}
        data={sessions}
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
        <XAxis dataKey="day" />
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
    </>
    }
    </>
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

BarTinyChart.propTypes = {
  sessions: PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
  })
}

export default BarTinyChart