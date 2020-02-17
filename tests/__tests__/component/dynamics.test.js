import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const test = jest.fn();

const parentState = {
  options: {
    chart: {
      events: {
        redraw: test
      }
    },
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts
  }
};

describe('Test - chart update and chart destroy.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );
  it('Test function should not be triggered.', () => {
    wrapper.setState({
      firstRender: false
    });
    expect(test).not.toHaveBeenCalled();
  });

  it('Test function should be triggered - chart has been updated.', () => {
    wrapper.setState({
      options: {
        series: [{
          data: [1, 2, 3, 4]
        }]
      }
    });
    expect(test).toHaveBeenCalledTimes(1);

    wrapper.setState({
      options: {
        series: [{
          data: [1, 2]
        }]
      }
    });

    expect(test).toHaveBeenCalledTimes(2);
  });

  it('Test the chart destroying after the component unmount.', () => {
    wrapper.unmount();

    expect(Highcharts.charts).toStrictEqual([undefined]);
  });

});
