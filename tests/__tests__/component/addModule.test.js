import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import HCmore from 'highcharts/highcharts-more';
import ParentComponent from '../../ParentComponent';

HCmore(Highcharts);

const parentState = {
  options: {
    series: [{
      type: 'bubble',
      data: [1, 2, 3]
    }]
  },

  parentProps: {
    highcharts: Highcharts
  }
};

describe('Test - add module', () => {
  global.console = { error: jest.fn() };
  mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Should be no errors in the console while module is attached properly', () => {
    expect(console.error).not.toBeCalled();
  });

});
