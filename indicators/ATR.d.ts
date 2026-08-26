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
import type { SeriesAtrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Average true range indicator (ATR). This series requires `linkedTo` option
 * to be set.
 *
 * A ready-made chart with `chart.type` set to `atr`. Declare the data with
 * `<ATR.Series>`, or use `ATRSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ATR>
 *   <ATR.Series options={{ linkedTo: 'prices' }} />
 * </ATR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.atr
 */
declare function ATR(props: ICommonAttributes): React.JSX.Element;
declare namespace ATR {
    export { ATRSeries as Series };
    export var type: string;
}
type SeriesAtrConfig = Omit<SeriesAtrOptions, "type">;
/** Props for the `<ATRSeries />` component. */
export interface ATRSeriesProps {
    id?: SeriesAtrConfig["id"];
    index?: SeriesAtrConfig["index"];
    name?: SeriesAtrConfig["name"];
    className?: SeriesAtrConfig["className"];
    color?: SeriesAtrConfig["color"];
    events?: SeriesAtrConfig["events"];
    options?: SeriesAtrConfig;
}
/**
 * Average true range indicator (ATR). This series requires `linkedTo` option
 * to be set.
 *
 * Renders the `atr` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ATRSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.atr
 */
export declare function ATRSeries(_props: ATRSeriesProps): any;
export declare namespace ATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ATR;
