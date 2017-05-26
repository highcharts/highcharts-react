import test from 'tape'
import Highcharts from 'highcharts'
import React from 'react'
import HighchartsReact from '../'
import { render } from 'react-dom'

test('renders single chart', (t) => {
  t.plan(2)
  const $container = document.createElement('div')

  // Chart callback
  const cb = function () {
    t.equal(this, Highcharts.charts[0])
  }

  render(<HighchartsReact
    highcharts={Highcharts}
    options={{ series: [{ data: [1, 2, 3] }], chart: { events: { load: cb } } }}
    constructorType={'chart'}
  />, $container)

  t.equal(Highcharts.charts.length, 1)

  t.end()
})
