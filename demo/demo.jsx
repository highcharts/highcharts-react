import React from 'react'
import { render } from 'react-dom'
// Import Highcharts
import Highcharts from 'highcharts/highstock'

// Import our demo components
import Chart from './components/Chart.jsx'
import StockChart from './components/Stock.jsx'
import MapChart from './components/Map.jsx'
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
  <Chart options={chartOptions} highcharts={Highcharts} />
  <StockChart options={stockOptions} highcharts={Highcharts} />
  <MapChart options={mapOptions} highcharts={Highcharts} />
</div>

render(<App />, document.getElementById('root'))
