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
import type { SeriesWmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `wma`. Declare the data with
 * `<WMA.Series>`, or use `WMASeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <WMA>
 *   <WMA.Series options={{ linkedTo: 'prices' }} />
 * </WMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.wma
 */
declare function WMA(props: ICommonAttributes): React.JSX.Element;
declare namespace WMA {
    export { WMASeries as Series };
    export var type: string;
}
type SeriesWmaConfig = Omit<SeriesWmaOptions, "type">;
/** Props for the `<WMASeries />` component. */
export interface WMASeriesProps {
    id?: SeriesWmaConfig["id"];
    index?: SeriesWmaConfig["index"];
    name?: SeriesWmaConfig["name"];
    className?: SeriesWmaConfig["className"];
    color?: SeriesWmaConfig["color"];
    events?: SeriesWmaConfig["events"];
    options?: SeriesWmaConfig;
}
/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `wma` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <WMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.wma
 */
export declare function WMASeries(_props: WMASeriesProps): any;
export declare namespace WMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WMA;
