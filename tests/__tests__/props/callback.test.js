import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const callbackFn = jest.fn();

const parentState = {
  options: {
    series: [{
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts,
    callback: callbackFn
  }
};

const parentProps = parentState.parentProps;

describe('Props tests - callback.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Callback function should be called only once.', () => {
    expect(callbackFn).toHaveBeenCalledTimes(1);

    wrapper.setState({
      options: {
        series: [{
          data: [2, 2, 2]
        }]
      }
    });

    expect(callbackFn).toHaveBeenCalledTimes(1);
  });

  it('Callback function should be called multiple times.', () => {
    expect(callbackFn).toHaveBeenCalledTimes(1);

    wrapper.setState({
      parentProps: {
        ...parentProps,
        immutable: true
      }
    });

    expect(callbackFn).toHaveBeenCalledTimes(2);

    wrapper.setState({
      options: {
        series: [{
          data: [3, 3, 3]
        }]
      }
    });

    expect(callbackFn).toHaveBeenCalledTimes(3);
  });
});
