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
 * The X axis or category axis. Normally this is the horizontal axis, though if
 * the chart is inverted this is the vertical axis. In case of multiple axes,
 * the xAxis node is an array of configuration objects.
 *
 * Sets `xAxis` on the parent chart. Several may be declared. The children set
 * `title.text`.
 *
 * @example
 * <Chart>
 *   <XAxis categories={["Jan", "Feb", "Mar"]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/xAxis
 */
export function XAxis(props) {
    return null;
}
XAxis._HCReact = {
    type: "HC_Option",
    HCOption: "xAxis",
    childOption: "title.text",
    defaultOptions: undefined,
    isArrayType: true,
};
export default XAxis;
