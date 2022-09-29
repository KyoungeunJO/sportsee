import "./RadarSimpleChart.css";
import PropTypes from 'prop-types';
import useUserPerformance from "../../services/useUserPerformance";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

/**
 * Component displaying activities' performances.
 * 
 * @component
 */
function RadarSimpleChart() {

  let {kind, data} = useUserPerformance({})

  data = data?.map(e => {
    e.fullMark = 150
    const kindNum = e.kind
    e.kind = kind[kindNum.toString()]
    return e
  })

  return (
    <>
    {data &&
    <>
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
    <PolarAngleAxis dataKey="kind" />
    <Radar
        name="Mike"
        dataKey="value"
        fill="#FF0101"
        fillOpacity={0.6}
    />
    </RadarChart>
    </>
    }
    </>
  );
}

RadarSimpleChart.propTypes = {
  data: PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
  })
}

export default RadarSimpleChart