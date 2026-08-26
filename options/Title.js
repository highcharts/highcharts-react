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
 * The chart's main title.
 *
 * Sets `title` on the parent chart. The children set `text`.
 *
 * @example
 * <Chart>
 *   <Title>Monthly sales</Title>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/title
 */
export function Title(props) {
    return null;
}
Title._HCReact = {
    type: "HC_Option",
    HCOption: "title",
    childOption: "text",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Title;
