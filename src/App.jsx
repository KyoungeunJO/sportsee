import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SideNav from './components/SideNav/SideNav'
import Metrics from './components/Metrics/Metrics'
import BarTinyChart from './components/BarTinyChart/BarTinyChart'
import LineTinyChart from './components/LineChart/LineTinyChart'
import RadarSimpleChart from './components/RadarSimpleChart/RadarSimpleChart'
import RadialTinyBarChart from './components/RadialTinyBarChart/RadialTinyBarChart'
import useUserInfos from './services/useUserInfos'

function App() {

  console.log('Render App');

  const {userInfos, keyData, todayScore, score} = useUserInfos()
  const _score = todayScore ? todayScore*100 : score*100 // API returns inconsistent data

  return (
      <div className="App">
        <Nav />
        <SideNav />
        <div className='main'>
          <Header userInfos={userInfos} />
          <Metrics keyData={keyData}/>
          <BarTinyChart />
          <div className="charts">
            <LineTinyChart />
            <RadarSimpleChart />
            <RadialTinyBarChart score={_score} />
          </div>
        </div>
      </div>
  )
}

export default App