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
import type { SeriesNatrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * Normalized average true range indicator (NATR). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
 *
 * A ready-made chart with `chart.type` set to `natr`. Declare the data with
 * `<NATR.Series>`, or use `NATRSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <NATR>
 *   <NATR.Series options={{ linkedTo: 'prices' }} />
 * </NATR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.natr
 */
declare function NATR(props: ICommonAttributes): React.JSX.Element;
declare namespace NATR {
    export { NATRSeries as Series };
    export var type: string;
}
type SeriesNatrConfig = Omit<SeriesNatrOptions, "type">;
/** Props for the `<NATRSeries />` component. */
export interface NATRSeriesProps {
    id?: SeriesNatrConfig["id"];
    index?: SeriesNatrConfig["index"];
    name?: SeriesNatrConfig["name"];
    className?: SeriesNatrConfig["className"];
    color?: SeriesNatrConfig["color"];
    events?: SeriesNatrConfig["events"];
    options?: SeriesNatrConfig;
}
/**
 * Normalized average true range indicator (NATR). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
 *
 * Renders the `natr` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <NATRSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.natr
 */
export declare function NATRSeries(_props: NATRSeriesProps): any;
export declare namespace NATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default NATR;
