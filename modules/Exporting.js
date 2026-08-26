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
import "highcharts/es-modules/masters/modules/exporting.src.js";
import "highcharts/es-modules/masters/modules/offline-exporting.src.js";
import "highcharts/es-modules/masters/modules/export-data.src.js";
/**
 * Options for the exporting module. For an overview on the matter, see [the
 * docs](https://www.highcharts.com/docs/export-module/export-module-overview)
 * and read our [Fair Usage
 * Policy](https://www.highcharts.com/docs/export-module/privacy-disclaimer-export).
 *
 * Sets `exporting` on the parent chart. Importing the component also loads the
 * Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Exporting filename="sales-report" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/exporting
 */
export function Exporting(props) {
    return null;
}
Exporting._HCReact = {
    type: "HC_Option",
    HCOption: "exporting",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Exporting;
