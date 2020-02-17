import React from 'react';
import HighchartsReact from '../src/HighchartsReact';

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chartComponent = React.createRef();
    this.state = props.parentState;
  }

  render() {
    const { parentProps, options } = this.state;

    return (
      <HighchartsReact
        { ...parentProps }
        options={ options }
        ref = { this.chartComponent }
      />
    );
  }
}
