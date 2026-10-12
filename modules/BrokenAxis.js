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
import "highcharts/es-modules/masters/modules/broken-axis.src.js";
/**
 * Lets an axis skip the ranges declared in `xAxis.breaks` / `yAxis.breaks`, so
 * gaps such as weekends or outliers do not stretch the axis.
 *
 * Importing the component also loads the Highcharts module it needs.
 *
 * @example
 * import { Chart, XAxis } from '@highcharts/react';
 * import { BrokenAxis } from '@highcharts/react/modules/BrokenAxis';
 *
 * <Chart>
 *   <BrokenAxis />
 *   <XAxis breaks={[{ from: 5, to: 10 }]} />
 * </Chart>
 */
export function BrokenAxis(props) {
    return null;
}
BrokenAxis._HCReact = {
    type: "HC_Option",
    HCOption: "brokenAxis",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default BrokenAxis;
