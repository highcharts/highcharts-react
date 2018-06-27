import React from 'react'
import HighchartsReact from '../../'

const Chart = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'chart'}
  options={options}
  oneToOne={true}
/>

export default Chart
