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
import type { SeriesOhlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * An OHLC chart is a style of financial chart used to describe price movements
 * over time. It displays open, high, low and close values per data point.
 *
 * A ready-made chart with `chart.type` set to `ohlc`. Declare the data with
 * `<OHLC.Series>`, or use `OHLCSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <OHLC>
 *   <OHLC.Series data={[1, 2, 3]} />
 * </OHLC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ohlc
 */
declare function OHLC(props: ICommonAttributes): React.JSX.Element;
declare namespace OHLC {
    export { OHLCSeries as Series };
    export var type: string;
}
type SeriesOhlcConfig = Omit<SeriesOhlcOptions, "type">;
/** Props for the `<OHLCSeries />` component. */
export interface OHLCSeriesProps {
    id?: SeriesOhlcConfig["id"];
    index?: SeriesOhlcConfig["index"];
    name?: SeriesOhlcConfig["name"];
    className?: SeriesOhlcConfig["className"];
    color?: SeriesOhlcConfig["color"];
    events?: SeriesOhlcConfig["events"];
    data?: SeriesOhlcConfig["data"];
    options?: SeriesOhlcConfig;
}
/**
 * An OHLC chart is a style of financial chart used to describe price movements
 * over time. It displays open, high, low and close values per data point.
 *
 * Renders the `ohlc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <OHLCSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ohlc
 */
export declare function OHLCSeries(_props: OHLCSeriesProps): any;
export declare namespace OHLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default OHLC;
