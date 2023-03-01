import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const redrawCallback = jest.fn();

const parentState = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        redraw: redrawCallback
      }
    },
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts,
    allowChartUpdate: false
  }
};

describe('Props tests - allowChartUpdate.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Chart should be updated after component update.', () => {
    expect(redrawCallback).not.toHaveBeenCalled();

    wrapper.setState({
      options: {
        series: [{
          data: [2, 2, 2]
        }]
      }
    });

    expect(redrawCallback).not.toHaveBeenCalled();
  });

  it('Chart should not be updated after component update.', () => {
    wrapper.setState({
      parentProps: {
        highcharts: Highcharts,
        allowChartUpdate: true
      },
      options: {
        series: [{
          data: [3, 2, 1]
        }]
      }
    });

    expect(redrawCallback).toHaveBeenCalled();
  });
});
