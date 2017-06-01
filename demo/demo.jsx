import React from 'react'
import { render } from 'react-dom'
// Import Highcharts
import Highcharts from 'highcharts/highstock'

// Import our demo components
import Chart from './components/Chart.jsx'
import StockChart from './components/Stock.jsx'
import MapChart from './components/Map.jsx'
import Container from './components/Container.jsx'
import mapData from './data/mapData.js'

// Load Highcharts modules
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)

const chartOptions = {
  series: [{
    data: [1, 2, 3]
  }]
}
const stockOptions = {
  series: [{
    data: [1, 2, 3]
  }]
}

const mapOptions = {
  series: [{
    mapData: mapData,
    joinBy: ['postal-code', 'code']
  }]
}

// Render app with demo chart
const App = () => <div>
  <h1>Demos</h1>

  <h2>Simple line chart</h2>
  <Chart options={chartOptions} highcharts={Highcharts} />

  <h2>Simple stock chart</h2>
  <StockChart options={stockOptions} highcharts={Highcharts} />

  <h2>Simple map chart</h2>
  <MapChart options={mapOptions} highcharts={Highcharts} />

  <h2>Live updating chart</h2>
  <Container />
</div>

render(<App />, document.getElementById('root'))
