import React from 'react';
import { mount } from 'enzyme';
import HighchartsReact from '../../../src/HighchartsReact';


test('Check if console warn occurs when props are not set.', () => {
  global.console = { warn: jest.fn() };

  mount(<HighchartsReact />);

  expect(console.warn).toBeCalled();
});
