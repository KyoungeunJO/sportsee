import "./LineTinyChart.css";
import PropTypes from 'prop-types';
import useUserAverageSessions from '../../services/useUserAverageSessions'
import { LineChart, Line, XAxis, Tooltip, Rectangle } from "recharts";

/**
 * Component displaying average duration of sessions per day.
 * 
 * @component
 */
function LineTinyChart() {

  let {sessions} = useUserAverageSessions({})
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  sessions = sessions?.map(e => {
    e.day = days[e.day-1]
    return e
  })
  
  return (
    <>
    {sessions &&
    <>
    <LineChart width={200} height={200} data={sessions} className="linechart">
      <Tooltip
        content={<CustomTooltip />}
        cursor={<CustomCursor />}
      />
    <XAxis dataKey="day" stroke="#FFFF" axisLine={false} tickLine={false} tickSize="16"/>
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
            dataKey="sessionLength"
            stroke="#FFFF"
            dot={false}
            strokeWidth={2} />
    </LineChart>
    </>
    }
    </>
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

LineTinyChart.propTypes = {
  sessions: PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired
  })
}

export default LineTinyChart