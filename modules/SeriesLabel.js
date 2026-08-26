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
import "highcharts/es-modules/masters/modules/series-label.src.js";
/**
 * Places a label next to each series, as an alternative to a legend for charts
 * where the series are easy to tell apart by position. Configured through
 * `plotOptions.series.label`.
 *
 * Importing the component also loads the Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <SeriesLabel />
 * </Chart>
 */
export function SeriesLabel(props) {
    return null;
}
SeriesLabel._HCReact = {
    type: "HC_Option",
    HCOption: "seriesLabel",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default SeriesLabel;
