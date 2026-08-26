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
import React from "react";
import type { SeriesPivotpointsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Pivot points indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `pivotpoints`. Declare the data
 * with `<PivotPoints.Series>`, or use `PivotPointsSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PivotPoints>
 *   <PivotPoints.Series options={{ linkedTo: 'prices' }} />
 * </PivotPoints>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pivotpoints
 */
declare function PivotPoints(props: ICommonAttributes): React.JSX.Element;
declare namespace PivotPoints {
    export { PivotPointsSeries as Series };
    export var type: string;
}
type SeriesPivotpointsConfig = Omit<SeriesPivotpointsOptions, "type">;
/** Props for the `<PivotPointsSeries />` component. */
export interface PivotPointsSeriesProps {
    id?: SeriesPivotpointsConfig["id"];
    index?: SeriesPivotpointsConfig["index"];
    name?: SeriesPivotpointsConfig["name"];
    className?: SeriesPivotpointsConfig["className"];
    color?: SeriesPivotpointsConfig["color"];
    events?: SeriesPivotpointsConfig["events"];
    options?: SeriesPivotpointsConfig;
}
/**
 * Pivot points indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after `stock/indicators/indicators.js` file.
 *
 * Renders the `pivotpoints` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PivotPointsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pivotpoints
 */
export declare function PivotPointsSeries(_props: PivotPointsSeriesProps): any;
export declare namespace PivotPointsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PivotPoints;
