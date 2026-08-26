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
import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A hollow candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * A ready-made chart with `chart.type` set to `hollowcandlestick`. Declare the
 * data with `<HollowCandlestick.Series>`, or use `HollowCandlestickSeries`
 * inside a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HollowCandlestick>
 *   <HollowCandlestick.Series data={[1, 2, 3]} />
 * </HollowCandlestick>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.hollowcandlestick
 */
declare function HollowCandlestick(props: ICommonAttributes): React.JSX.Element;
declare namespace HollowCandlestick {
    export { HollowCandlestickSeries as Series };
    export var type: string;
}
type SeriesHollowcandlestickConfig = Omit<SeriesHollowcandlestickOptions, "type">;
/** Props for the `<HollowCandlestickSeries />` component. */
export interface HollowCandlestickSeriesProps {
    id?: SeriesHollowcandlestickConfig["id"];
    index?: SeriesHollowcandlestickConfig["index"];
    name?: SeriesHollowcandlestickConfig["name"];
    className?: SeriesHollowcandlestickConfig["className"];
    color?: SeriesHollowcandlestickConfig["color"];
    events?: SeriesHollowcandlestickConfig["events"];
    data?: SeriesHollowcandlestickConfig["data"];
    options?: SeriesHollowcandlestickConfig;
}
/**
 * A hollow candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * Renders the `hollowcandlestick` series type inside a chart component. The
 * most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HollowCandlestickSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.hollowcandlestick
 */
export declare function HollowCandlestickSeries(_props: HollowCandlestickSeriesProps): any;
export declare namespace HollowCandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HollowCandlestick;
