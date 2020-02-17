import React from 'react';
import { mount } from 'enzyme';
import Highcharts from 'highcharts';
import HighchartsReact from '../../../src/HighchartsReact';

 
test('Check if console warn occurs when props are not set', () => {

  const wrapper = mount(<HighchartsReact 
    highcharts={ Highcharts }
    options={ {
      series: [{
        data: [1, 2, 3]
      }]
    } }
  />);

  console.log(wrapper.props());
});
