import React from "react";
import Highcharts from "highcharts";

export default class HighchartsReact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  createChart() {
    const props = this.props;
    const H = props.highcharts || Highcharts;
    const constructorType = props.constructorType || "chart";

    if (!H) {
      console.warn('The "highcharts" property was not passed.');
    } else if (!H[constructorType]) {
      console.warn('The "constructorType" property is incorrect or some ' +
        'required module is not imported.');
    } else if (!props.options) {
      console.warn('The "options" property was not passed.');
    } else {
      // Create a chart
      this.chart = H[constructorType](
        this.container.current,
        props.options,
        props.callback ? props.callback : undefined
      );
    }
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    const props = this.props;

    if (props.allowChartUpdate !== false) {
      if (!props.immutable && this.chart) {
        this.chart.update(
          props.options,
          ...(props.updateArgs || [true, true])
        );
      } else {
        this.createChart();
      }
    }
  }

  componentWillUnmount() {
    // Destroy chart
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    // Create container for the chart
    return React.createElement(
      "div",
      { ...this.props.containerProps, ref: this.container }
    );
  }
}
