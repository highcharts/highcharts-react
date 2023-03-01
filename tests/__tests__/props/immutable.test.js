import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts/highstock';
import ParentComponent from '../../ParentComponent';

import map from 'highcharts/modules/map';
map(Highcharts);

const loadCallback = jest.fn();
const redrawCallback = jest.fn();

const parentState = {
  options: {
    accessibility: {
      enabled: false
    },
    chart: {
      events: {
        load: loadCallback,
        redraw: redrawCallback
      }
    },
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts,
    immutable: true
  }
};

describe('Props tests - immutable.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Chart should be recreated after component update.', () => {
    wrapper.setState({
      options: {
        accessibility: {
          enabled: false
        },
        chart: {
          events: {
            load: loadCallback,
            redraw: redrawCallback
          }
        },
        series: [{
          data: [2, 2, 2]
        }]
      }
    });

    expect(redrawCallback).not.toHaveBeenCalled();
    expect(loadCallback).toHaveBeenCalledTimes(2);
  });

  it('Chart should be updated after component update.', () => {
    wrapper.setState({
      options: {},
      parentProps: {
        highcharts: Highcharts,
        immutable: false
      }
    });

    expect(redrawCallback).toHaveBeenCalledTimes(1);
  });
});
