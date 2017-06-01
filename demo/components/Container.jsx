import React from 'react'
import HighchartsReact from '../../'
import Highcharts from 'highcharts'

export default class Container extends React.Component {
  constructor () {
    super()
    this.state = { data: [] }
    setInterval(() => this.setState({ data: [...Array(3)].map(Math.random) }), 1500)
  }

  render () {
    const cb = function () {}
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={{ series: [{ data: this.state.data }], chart: { events: { load: cb } } }}
          constructorType={'chart'}
        />
      </div>
    )
  }
}
