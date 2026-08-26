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
import type { SeriesWilliamsrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Williams %R. This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `williamsr`. Declare the data
 * with `<WilliamsR.Series>`, or use `WilliamsRSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <WilliamsR>
 *   <WilliamsR.Series options={{ linkedTo: 'prices' }} />
 * </WilliamsR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.williamsr
 */
declare function WilliamsR(props: ICommonAttributes): React.JSX.Element;
declare namespace WilliamsR {
    export { WilliamsRSeries as Series };
    export var type: string;
}
type SeriesWilliamsrConfig = Omit<SeriesWilliamsrOptions, "type">;
/** Props for the `<WilliamsRSeries />` component. */
export interface WilliamsRSeriesProps {
    id?: SeriesWilliamsrConfig["id"];
    index?: SeriesWilliamsrConfig["index"];
    name?: SeriesWilliamsrConfig["name"];
    className?: SeriesWilliamsrConfig["className"];
    color?: SeriesWilliamsrConfig["color"];
    events?: SeriesWilliamsrConfig["events"];
    options?: SeriesWilliamsrConfig;
}
/**
 * Williams %R. This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `williamsr` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <WilliamsRSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.williamsr
 */
export declare function WilliamsRSeries(_props: WilliamsRSeriesProps): any;
export declare namespace WilliamsRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WilliamsR;
