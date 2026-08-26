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
import "highcharts/es-modules/masters/modules/data.src.js";
/**
 * The Data module provides a simplified interface for adding data to a chart
 * from sources like CVS, HTML tables or grid views. See also the [tutorial
 * article on the Data
 * module](https://www.highcharts.com/docs/working-with-data/data-module).
 *
 * Sets `data` on the parent chart. Importing the component also loads the
 * Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Data csv={csvString} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/data
 */
export function Data(props) {
    return null;
}
Data._HCReact = {
    type: "HC_Option",
    HCOption: "data",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Data;
