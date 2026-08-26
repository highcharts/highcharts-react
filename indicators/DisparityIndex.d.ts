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
import type { SeriesDisparityindexOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Disparity Index. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `disparityindex`. Declare the
 * data with `<DisparityIndex.Series>`, or use `DisparityIndexSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DisparityIndex>
 *   <DisparityIndex.Series options={{ linkedTo: 'prices' }} />
 * </DisparityIndex>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.disparityindex
 */
declare function DisparityIndex(props: ICommonAttributes): React.JSX.Element;
declare namespace DisparityIndex {
    export { DisparityIndexSeries as Series };
    export var type: string;
}
type SeriesDisparityindexConfig = Omit<SeriesDisparityindexOptions, "type">;
/** Props for the `<DisparityIndexSeries />` component. */
export interface DisparityIndexSeriesProps {
    id?: SeriesDisparityindexConfig["id"];
    index?: SeriesDisparityindexConfig["index"];
    name?: SeriesDisparityindexConfig["name"];
    className?: SeriesDisparityindexConfig["className"];
    color?: SeriesDisparityindexConfig["color"];
    events?: SeriesDisparityindexConfig["events"];
    options?: SeriesDisparityindexConfig;
}
/**
 * Disparity Index. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `disparityindex` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DisparityIndexSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.disparityindex
 */
export declare function DisparityIndexSeries(_props: DisparityIndexSeriesProps): any;
export declare namespace DisparityIndexSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DisparityIndex;
