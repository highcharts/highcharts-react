import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const parentState = {
  options: {
    accessibility: {
      enabled: false
    }
  },
  parentProps: {
    highcharts: Highcharts
  }
};

describe('Test - component refs.', () => {
  it('The component should have chart and container refs.', () => {
    const wrapper = mount(
      <ParentComponent parentState={ parentState } />
    );

    expect(
      wrapper.instance().chartComponent.current.chart
    ).toBe(Highcharts.charts[0]);

    expect(
      wrapper.instance().chartComponent.current.container
    ).toBeDefined();
  });
});
