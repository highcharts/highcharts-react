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
 * The legend is a box containing a symbol and name for each series item or
 * point item in the chart. Each series (or points in case of pie charts) is
 * represented by a symbol and its name in the legend.
 *
 * Sets `legend` on the parent chart. The children set `labelFormat`.
 *
 * @example
 * <Chart>
 *   <Legend align="right" layout="vertical" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/legend
 */
export function Legend(props) {
    return null;
}
Legend._HCReact = {
    type: "HC_Option",
    HCOption: "legend",
    childOption: "labelFormat",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Legend;
