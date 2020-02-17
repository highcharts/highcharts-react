import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import ParentComponent from '../../ParentComponent';

const parentState = {
  options: {},

  parentProps: {
    highcharts: Highcharts,
    containerProps: { style: { height: '300px' } }
  }
};

describe('Props tests - containerProps.', () => {
  const wrapper = mount(
    <ParentComponent parentState={ parentState } />
  );

  it('Chart container should have style from containerProps.', () => {
    expect(wrapper.find('div').prop('style')).toHaveProperty('height', '300px');
  });

  it('Chart container should have class from containerProps.', () => {
    wrapper.setState({
      parentProps: {
        highcharts: Highcharts,
        containerProps: { className: 'someCustomClassName' }
      }
    });

    expect(wrapper.find('div').hasClass('someCustomClassName')).toBe(true);
  });
});
