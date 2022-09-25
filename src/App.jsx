import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SideNav from './components/SideNav/SideNav'
import Metrics from './components/Metrics/Metrics'
import BarTinyChart from './components/BarTinyChart/BarTinyChart'
import LineTinyChart from './components/LineChart/LineTinyChart'
import RadarSimpleChart from './components/RadarSimpleChart/RadarSimpleChart'
import RadialTinyBarChart from './components/RadialTinyBarChart/RadialTinyBarChart'

function App() {

  console.log('Render App');

  return (
      <div className="App">
        <Nav />
        <SideNav />
        <div className='main'>
          <Header />
          <Metrics />
          <BarTinyChart />
          <div className="charts">
            <LineTinyChart />
            <RadarSimpleChart />
            <RadialTinyBarChart />
          </div>
        </div>
      </div>
  )
}

export default App