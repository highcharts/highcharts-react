import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const test = jest.fn();

const parentState = {
  options: {
    chart: {
      events: {
        load: test
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

describe('Test - multiple charts', () => {
  mount(
    <ParentComponent parentState={ parentState } />
  );
  mount(
    <ParentComponent parentState={ parentState } />
  );
  mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Test function should not be triggered', () => {
    expect(test).toHaveBeenCalledTimes(3);
  });
});
