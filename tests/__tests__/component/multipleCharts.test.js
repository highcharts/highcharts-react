import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import HighchartsReact from '../../../src/HighchartsReact';

const options = {
  accessibility: {
    enabled: false
  }
};

describe('Test - multiple charts.', () => {
  mount(
    <div>
      <HighchartsReact options={ options } highcharts={ Highcharts } />
      <HighchartsReact options={ options } highcharts={ Highcharts } />
      <HighchartsReact options={ options } highcharts={ Highcharts } />
    </div>
  );

  it('There should be rendered three charts.', () => {
    expect(Highcharts.charts.length).toBe(3);
    expect(Highcharts.charts[1]).toHaveProperty('series');
  });
});
