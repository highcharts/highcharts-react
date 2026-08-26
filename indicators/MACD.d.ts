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
import type { SeriesMacdOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Moving Average Convergence Divergence (MACD). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `macd`. Declare the data with
 * `<MACD.Series>`, or use `MACDSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <MACD>
 *   <MACD.Series options={{ linkedTo: 'prices' }} />
 * </MACD>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.macd
 */
declare function MACD(props: ICommonAttributes): React.JSX.Element;
declare namespace MACD {
    export { MACDSeries as Series };
    export var type: string;
}
type SeriesMacdConfig = Omit<SeriesMacdOptions, "type">;
/** Props for the `<MACDSeries />` component. */
export interface MACDSeriesProps {
    id?: SeriesMacdConfig["id"];
    index?: SeriesMacdConfig["index"];
    name?: SeriesMacdConfig["name"];
    className?: SeriesMacdConfig["className"];
    color?: SeriesMacdConfig["color"];
    events?: SeriesMacdConfig["events"];
    options?: SeriesMacdConfig;
}
/**
 * Moving Average Convergence Divergence (MACD). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * Renders the `macd` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <MACDSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.macd
 */
export declare function MACDSeries(_props: MACDSeriesProps): any;
export declare namespace MACDSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MACD;
