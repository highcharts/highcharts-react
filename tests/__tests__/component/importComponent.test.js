import React from 'react';
import Highcharts from 'highcharts';
import { mount } from 'enzyme';
import { default as HighchartsReactDefault, HighchartsReact } from '../../../src/HighchartsReact';

let charts = [];
const componentProps = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        load() {
          charts.push(this);
        }
      }
    }
  },
  highcharts: Highcharts
};

describe('Test - import component.', () => {
  it('A chart should be created by HighchartsReact from default export', () => {
    mount(<HighchartsReactDefault { ...componentProps } />);
    expect(charts[0]).toBeDefined();
  });

  it('A chart should be created by HighchartsReact from named export', () => {
    mount(<HighchartsReact { ...componentProps } />);
    expect(charts[1]).toBeDefined();
  });
});