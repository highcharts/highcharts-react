import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import Highstock from 'highcharts/highstock';
import ParentComponent from '../../ParentComponent';

let chart;
const test = jest.fn();
const parentState = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        load() {
          chart = this;
          test();
        }
      }
    },
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highstock
  }
};

describe('Props tests - highcharts.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('A basic chart should be created.', () => {
    expect(chart.navigator).toBeUndefined();
  });

  it('A chart should be recreated once.', () => {
    wrapper.setState({
      parentProps: {
        highcharts: Highcharts
      }
    });

    wrapper.setState({
      parentProps: {
        highcharts: Highcharts
      }
    });

    expect(test).toHaveBeenCalledTimes(2);
  });
});
