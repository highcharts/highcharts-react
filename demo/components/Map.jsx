import React from 'react'
import HighchartsReact from '../../'

const MapChart = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'mapChart'}
  options={options}
/>

export default MapChart
