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
import type { SeriesEmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Exponential moving average indicator (EMA). This series requires the
 * `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `ema`. Declare the data with
 * `<EMA.Series>`, or use `EMASeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <EMA>
 *   <EMA.Series options={{ linkedTo: 'prices' }} />
 * </EMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ema
 */
declare function EMA(props: ICommonAttributes): React.JSX.Element;
declare namespace EMA {
    export { EMASeries as Series };
    export var type: string;
}
type SeriesEmaConfig = Omit<SeriesEmaOptions, "type">;
/** Props for the `<EMASeries />` component. */
export interface EMASeriesProps {
    id?: SeriesEmaConfig["id"];
    index?: SeriesEmaConfig["index"];
    name?: SeriesEmaConfig["name"];
    className?: SeriesEmaConfig["className"];
    color?: SeriesEmaConfig["color"];
    events?: SeriesEmaConfig["events"];
    options?: SeriesEmaConfig;
}
/**
 * Exponential moving average indicator (EMA). This series requires the
 * `linkedTo` option to be set.
 *
 * Renders the `ema` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <EMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ema
 */
export declare function EMASeries(_props: EMASeriesProps): any;
export declare namespace EMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default EMA;
