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
import type { SeriesCandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A candlestick chart is a style of financial chart used to describe price
 * movements over time.
 *
 * A ready-made chart with `chart.type` set to `candlestick`. Declare the data
 * with `<Candlestick.Series>`, or use `CandlestickSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Candlestick>
 *   <Candlestick.Series data={[1, 2, 3]} />
 * </Candlestick>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.candlestick
 */
declare function Candlestick(props: ICommonAttributes): React.JSX.Element;
declare namespace Candlestick {
    export { CandlestickSeries as Series };
    export var type: string;
}
type SeriesCandlestickConfig = Omit<SeriesCandlestickOptions, "type">;
/** Props for the `<CandlestickSeries />` component. */
export interface CandlestickSeriesProps {
    id?: SeriesCandlestickConfig["id"];
    index?: SeriesCandlestickConfig["index"];
    name?: SeriesCandlestickConfig["name"];
    className?: SeriesCandlestickConfig["className"];
    color?: SeriesCandlestickConfig["color"];
    events?: SeriesCandlestickConfig["events"];
    data?: SeriesCandlestickConfig["data"];
    options?: SeriesCandlestickConfig;
}
/**
 * A candlestick chart is a style of financial chart used to describe price
 * movements over time.
 *
 * Renders the `candlestick` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CandlestickSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.candlestick
 */
export declare function CandlestickSeries(_props: CandlestickSeriesProps): any;
export declare namespace CandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Candlestick;
