import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts/highstock';
import ParentComponent from '../../ParentComponent';

import map from 'highcharts/modules/map';
map(Highcharts);

let chart;
const parentState = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        load() {
          chart = this;
        }
      }
    },
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts,
    constructorType: 'stockChart',
    immutable: true
  }
};

const parentProps = parentState.parentProps;

describe('Props tests - constructorType.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Chart should be a stock chart.', () => {
    expect(chart.navigator).toBeDefined();
  });

  it('Chart should not be a stock chart.', () => {
    wrapper.setState({
      parentProps: {
        ...parentProps, constructorType: 'chart'
      }
    });

    expect(chart.navigator).toBeUndefined();
  });

  it('Chart should be a map chart.', () => {
    wrapper.setState({
      parentProps: {
        ...parentProps, constructorType: 'mapChart'
      }
    });

    expect(chart).toBeDefined();
  });

  it('Chart should be recreated on constructorType change.', () => {
    wrapper.setState({
      parentProps: {
        ...parentProps, immutable: false, constructorType: 'stockChart'
      }
    });

    expect(chart.navigator).toBeDefined();
  });
});
