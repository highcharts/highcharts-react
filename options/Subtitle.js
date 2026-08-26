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
 * The chart's subtitle. This can be used both to display a subtitle below the
 * main title, and to display random text anywhere in the chart. The subtitle
 * can be updated after chart initialization through the `Chart.setTitle`
 * method.
 *
 * Sets `subtitle` on the parent chart. The children set `text`.
 *
 * @example
 * <Chart>
 *   <Subtitle>Source: internal data</Subtitle>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/subtitle
 */
export function Subtitle(props) {
    return null;
}
Subtitle._HCReact = {
    type: "HC_Option",
    HCOption: "subtitle",
    childOption: "text",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Subtitle;
