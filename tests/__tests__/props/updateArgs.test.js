import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts/highstock';
import ParentComponent from '../../ParentComponent';

let chart;
const redrawCallback = jest.fn();

const parentState = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        redraw: redrawCallback,
        load(){
          chart = this;
        }
      }
    },
    series: [{
      data: [1, 2, 3]
    }, {
      data: [3, 2, 1]
    }]
  },

  parentProps: {
    highcharts: Highcharts,
    updateArgs: [false, false]
  }
};

describe('Props tests - updateArgs.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Redraw callback function should not be called.', () => {
    wrapper.setState({
      options: {
        series: []
      }
    });

    expect(redrawCallback).not.toHaveBeenCalled();
  });

  it('Redraw callback function should be called, series should not be removed.', () => {
    wrapper.setState({
      parentProps: {
        highcharts: Highcharts,
        updateArgs: [true, false]
      }
    });

    expect(redrawCallback).toHaveBeenCalled();
    expect(chart.series.length).toBe(2);
  });

  it('Series should be removed.', () => {
    wrapper.setState({
      parentProps: {
        highcharts: Highcharts,
        updateArgs: [true, true]
      }
    });

    expect(chart.series.length).toBe(0);
  });
});
