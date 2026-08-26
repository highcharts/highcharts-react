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
import type { SeriesTrixOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `trix`. Declare the data with
 * `<TRIX.Series>`, or use `TRIXSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <TRIX>
 *   <TRIX.Series options={{ linkedTo: 'prices' }} />
 * </TRIX>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.trix
 */
declare function TRIX(props: ICommonAttributes): React.JSX.Element;
declare namespace TRIX {
    export { TRIXSeries as Series };
    export var type: string;
}
type SeriesTrixConfig = Omit<SeriesTrixOptions, "type">;
/** Props for the `<TRIXSeries />` component. */
export interface TRIXSeriesProps {
    id?: SeriesTrixConfig["id"];
    index?: SeriesTrixConfig["index"];
    name?: SeriesTrixConfig["name"];
    className?: SeriesTrixConfig["className"];
    color?: SeriesTrixConfig["color"];
    events?: SeriesTrixConfig["events"];
    options?: SeriesTrixConfig;
}
/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * Renders the `trix` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <TRIXSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.trix
 */
export declare function TRIXSeries(_props: TRIXSeriesProps): any;
export declare namespace TRIXSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TRIX;
