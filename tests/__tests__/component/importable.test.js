import React from 'react';
import { mount } from 'enzyme';
import { default as HighchartsReactDefault, HighchartsReact } from '../../../src/HighchartsReact';

describe('Test - imports.', () => {
  it('Should render from the default export', () => {
    expect(() => {
      mount(
        <HighchartsReactDefault />
      );
    }).not.toThrow(Error);
  });

  it('Should render from the named export', () => {
    expect(() => {
      mount(
        <HighchartsReact />
      );
    }).not.toThrow(Error);
  });
});
