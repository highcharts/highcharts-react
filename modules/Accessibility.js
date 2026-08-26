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
import "highcharts/es-modules/masters/modules/accessibility.src.js";
/**
 * Options for configuring accessibility for the chart. Requires the
 * [accessibility module](https://code.highcharts.com/modules/accessibility.js)
 * to be loaded. For a description of the module and information on its
 * features, see [Highcharts
 * Accessibility](https://www.highcharts.com/docs/accessibility/accessibility-module).
 *
 * Sets `accessibility` on the parent chart. Importing the component also loads
 * the Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Accessibility description="Sales per month" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/accessibility
 */
export function Accessibility(props) {
    return null;
}
Accessibility._HCReact = {
    type: "HC_Option",
    HCOption: "accessibility",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Accessibility;
