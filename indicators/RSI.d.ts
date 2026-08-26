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
import type { SeriesRsiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Relative strength index (RSI) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `rsi`. Declare the data with
 * `<RSI.Series>`, or use `RSISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <RSI>
 *   <RSI.Series options={{ linkedTo: 'prices' }} />
 * </RSI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.rsi
 */
declare function RSI(props: ICommonAttributes): React.JSX.Element;
declare namespace RSI {
    export { RSISeries as Series };
    export var type: string;
}
type SeriesRsiConfig = Omit<SeriesRsiOptions, "type">;
/** Props for the `<RSISeries />` component. */
export interface RSISeriesProps {
    id?: SeriesRsiConfig["id"];
    index?: SeriesRsiConfig["index"];
    name?: SeriesRsiConfig["name"];
    className?: SeriesRsiConfig["className"];
    color?: SeriesRsiConfig["color"];
    events?: SeriesRsiConfig["events"];
    options?: SeriesRsiConfig;
}
/**
 * Relative strength index (RSI) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * Renders the `rsi` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <RSISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.rsi
 */
export declare function RSISeries(_props: RSISeriesProps): any;
export declare namespace RSISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default RSI;
