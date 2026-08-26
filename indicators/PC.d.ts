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
import type { SeriesPcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Price channel (PC). This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `pc`. Declare the data with
 * `<PC.Series>`, or use `PCSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PC>
 *   <PC.Series options={{ linkedTo: 'prices' }} />
 * </PC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pc
 */
declare function PC(props: ICommonAttributes): React.JSX.Element;
declare namespace PC {
    export { PCSeries as Series };
    export var type: string;
}
type SeriesPcConfig = Omit<SeriesPcOptions, "type">;
/** Props for the `<PCSeries />` component. */
export interface PCSeriesProps {
    id?: SeriesPcConfig["id"];
    index?: SeriesPcConfig["index"];
    name?: SeriesPcConfig["name"];
    className?: SeriesPcConfig["className"];
    color?: SeriesPcConfig["color"];
    events?: SeriesPcConfig["events"];
    options?: SeriesPcConfig;
}
/**
 * Price channel (PC). This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `pc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PCSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pc
 */
export declare function PCSeries(_props: PCSeriesProps): any;
export declare namespace PCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PC;
