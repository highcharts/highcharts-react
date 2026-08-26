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
import "highcharts/es-modules/masters/modules/stock-tools.src.js";
import "highcharts/es-modules/masters/indicators/indicators-all.src.js";
import "highcharts/es-modules/masters/modules/annotations-advanced.src.js";
import "highcharts/es-modules/masters/modules/price-indicator.src.js";
import "highcharts/es-modules/masters/modules/full-screen.src.js";
import "highcharts/es-modules/masters/modules/heikinashi.src.js";
import "highcharts/es-modules/masters/modules/hollowcandlestick.src.js";
import "highcharts/css/stocktools/gui.css";
import "highcharts/css/annotations/popup.css";
/**
 * Configure the stockTools gui strings in the chart. Requires the stockTools
 * module to be loaded. For a description of the module and information on its
 * features, see Highcharts StockTools.
 *
 * Sets `stockTools` on the parent chart. Importing the component also loads
 * the Highcharts module it needs.
 *
 * @example
 * <StockChart>
 *   <StockTools />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/stockTools
 */
export function StockTools(props) {
    return null;
}
StockTools._HCReact = {
    type: "HC_Option",
    HCOption: "stockTools",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default StockTools;
