/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
/**
 * The Y axis or value axis. Normally this is the vertical axis, though if the
 * chart is inverted this is the horizontal axis. In case of multiple axes, the
 * yAxis node is an array of configuration objects.
 *
 * Sets `yAxis` on the parent chart. Several may be declared. The children set
 * `title.text`.
 *
 * @example
 * <Chart>
 *   <YAxis>Temperature</YAxis>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/yAxis
 */
export function YAxis(props) {
    return null;
}
YAxis._HCReact = {
    type: "HC_Option",
    HCOption: "yAxis",
    childOption: "title.text",
    defaultOptions: undefined,
    isArrayType: true,
};
export default YAxis;
