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
 * Highcharts by default puts a credits label in the lower right corner of the
 * chart. This can be changed using these options.
 *
 * Sets `credits` on the parent chart. The children set `text`.
 *
 * @example
 * <Chart>
 *   <Credits enabled={false} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/credits
 */
export function Credits(props) {
    return null;
}
Credits._HCReact = {
    type: "HC_Option",
    HCOption: "credits",
    childOption: "text",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Credits;
