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
import type { SeriesChaikinOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Chaikin Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `chaikin`. Declare the data with
 * `<Chaikin.Series>`, or use `ChaikinSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Chaikin>
 *   <Chaikin.Series options={{ linkedTo: 'prices' }} />
 * </Chaikin>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.chaikin
 */
declare function Chaikin(props: ICommonAttributes): React.JSX.Element;
declare namespace Chaikin {
    export { ChaikinSeries as Series };
    export var type: string;
}
type SeriesChaikinConfig = Omit<SeriesChaikinOptions, "type">;
/** Props for the `<ChaikinSeries />` component. */
export interface ChaikinSeriesProps {
    id?: SeriesChaikinConfig["id"];
    index?: SeriesChaikinConfig["index"];
    name?: SeriesChaikinConfig["name"];
    className?: SeriesChaikinConfig["className"];
    color?: SeriesChaikinConfig["color"];
    events?: SeriesChaikinConfig["events"];
    options?: SeriesChaikinConfig;
}
/**
 * Chaikin Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `chaikin` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ChaikinSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.chaikin
 */
export declare function ChaikinSeries(_props: ChaikinSeriesProps): any;
export declare namespace ChaikinSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Chaikin;
