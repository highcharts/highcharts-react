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
import type { SeriesVwapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Volume Weighted Average Price indicator.
 *
 * A ready-made chart with `chart.type` set to `vwap`. Declare the data with
 * `<VWAP.Series>`, or use `VWAPSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <VWAP>
 *   <VWAP.Series options={{ linkedTo: 'prices' }} />
 * </VWAP>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.vwap
 */
declare function VWAP(props: ICommonAttributes): React.JSX.Element;
declare namespace VWAP {
    export { VWAPSeries as Series };
    export var type: string;
}
type SeriesVwapConfig = Omit<SeriesVwapOptions, "type">;
/** Props for the `<VWAPSeries />` component. */
export interface VWAPSeriesProps {
    id?: SeriesVwapConfig["id"];
    index?: SeriesVwapConfig["index"];
    name?: SeriesVwapConfig["name"];
    className?: SeriesVwapConfig["className"];
    color?: SeriesVwapConfig["color"];
    events?: SeriesVwapConfig["events"];
    options?: SeriesVwapConfig;
}
/**
 * Volume Weighted Average Price indicator.
 *
 * Renders the `vwap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <VWAPSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.vwap
 */
export declare function VWAPSeries(_props: VWAPSeriesProps): any;
export declare namespace VWAPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VWAP;
