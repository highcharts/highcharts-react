/*******************************************************************************
 *
 * Highcharts React Wrapper Generator
 *
 *
 *******************************************************************************/

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  Highcharts as Chart,
  Area,
  Line,
  Title,
  Subtitle,
  Credits,
  Tooltip
} from '../src';

import Bubble from '../src/series/Bubble';

////////////////////////////////////////////////////////////////////////////////

const container = document.getElementById('root');
const root = createRoot(container);

const csv = `a,b
0,34
1,3
2,64
`;

////////////////////////////////////////////////////////////////////////////////

// Chart with multiple series of different types
const MultiChart = () => (
  <Chart title="Chart with multiple series types">
    <Area.Series data={[0, 1, 2, 3]} />
    <Line.Series data={[4, 5, 4, 2]} />
  </Chart>
);

// Chart using options on series
const SeriesOptions = () => (
  <Chart title="Chart using options on series">
    <Line.Series
      options={{
        data: [2, 4, 6],
        shadow: true,
        colorIndex: 2
      }}
    />
  </Chart>
);

// A basic chart
const BasicChart = () => <Line title="Single line series from CSV" csv={csv} />;

// A chart with data mutation
const EditableChart = () => {
  const [chartData, setChartData] = useState<number[]>([1, 2, 3]);

  const addPoint = () => {
    const ndata = [].concat(chartData);
    ndata.push(Math.random() * 10);
    setChartData(ndata);
  };

  return (
    <div>
      <Chart title="Add to me!">
        <Line.Series data={chartData} />
      </Chart>
      <button onClick={addPoint}>Add point!</button>
    </div>
  );
};

// Shows how to use raw vanilla options
const Bubbles = () => (
  <Bubble
    options={{
      tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
          '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
          '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
          '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
      },
      series: [
        {
          data: [
            { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
            {
              x: 65.5,
              y: 126.4,
              z: 35.3,
              name: 'US',
              country: 'United States'
            },
            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
          ]
        }
      ]
    }}
  />
);

const PropTions = () => (
  <Chart>
    <Title>Hello world</Title>

    <Subtitle>More info to come...</Subtitle>

    <Credits style={{fontSize: 'large'}}>
      HIGHCHARTS DOT COM
    </Credits>

    <Tooltip>{'Coool point eh? X: {point.x}, Y: {point.y}'}</Tooltip>

    <Line.Series
      options={{
        data: [2, 4, 6],
        shadow: true,
        colorIndex: 2
      }}
    />
  </Chart>
);


////////////////////////////////////////////////////////////////////////////////

const Application = () => (
  <div>
    <PropTions />
    <MultiChart />
    <SeriesOptions />
    <BasicChart />
    <EditableChart />
    <Bubbles />
  </div>
);

root.render(<Application />);
