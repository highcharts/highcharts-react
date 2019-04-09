import React from "react";

export default class HighchartsReact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  _createChart(props) {
    const highcharts = props.highcharts || window.Highcharts;
    // Create chart
    this.chart = highcharts[props.constructorType || "chart"](
      this.container.current,
      props.options,
      props.callback ? props.callback : undefined
    );
  }

  componentDidMount() {
    this._createChart(this.props);
  }

  componentDidUpdate() {
    if (this.props.immutable && this.chart) {
      this.chart.destroy();
      this._createChart(this.props);

      return;
    }

    if (this.props.allowChartUpdate !== false) {
      this.chart.update(
        this.props.options,
        ...(this.props.updateArgs || [true, true])
      );
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
