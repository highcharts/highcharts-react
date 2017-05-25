import React from 'react'
import HighchartsReact from '../../'

const StockChart = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'chart'}
  options={options}
/>

export default StockChart
