/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
/**
 * Options for the tooltip that appears when the user hovers over a series or
 * point.
 *
 * Sets `tooltip` on the parent chart. The children set `format`.
 *
 * @example
 * import { Chart, Tooltip } from '@highcharts/react';
 *
 * <Chart>
 *   <Tooltip valueSuffix=" units" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/tooltip
 */
export function Tooltip(props) {
    return null;
}
Tooltip._HCReact = {
    type: "HC_Option",
    HCOption: "tooltip",
    childOption: "format",
    defaultOptions: { useHTML: true },
    isArrayType: false,
};
export default Tooltip;
