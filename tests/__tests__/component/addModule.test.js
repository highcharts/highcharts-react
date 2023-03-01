import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import HCmore from 'highcharts/highcharts-more';
import HighchartsReact from '../../../src/HighchartsReact';

const options = {
  accessibility: {
    enabled: false
  },
  series: [{
    type: 'bubble',
    data: [1, 2, 3]
  }]
};

describe('Test - add module.', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => {});
  });

  it('There should be an error before module initialization.', () => {
    expect(() => {
      mount(
        <HighchartsReact options={ options } highcharts={ Highcharts } />
      );
    }).toThrow(Error);
  });

  it('Should be no errors in the console while module is attached properly.', () => {
    HCmore(Highcharts);

    expect(() => {
      mount(
        <HighchartsReact options={ options } highcharts={ Highcharts } />
      );
    }).not.toThrow(Error);
  });

  afterEach(() => {
    console.error.mockRestore();
  });
});
