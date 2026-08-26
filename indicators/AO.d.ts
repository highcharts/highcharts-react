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
import type { SeriesAoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Awesome Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`
 *
 * A ready-made chart with `chart.type` set to `ao`. Declare the data with
 * `<AO.Series>`, or use `AOSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <AO>
 *   <AO.Series options={{ linkedTo: 'prices' }} />
 * </AO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ao
 */
declare function AO(props: ICommonAttributes): React.JSX.Element;
declare namespace AO {
    export { AOSeries as Series };
    export var type: string;
}
type SeriesAoConfig = Omit<SeriesAoOptions, "type">;
/** Props for the `<AOSeries />` component. */
export interface AOSeriesProps {
    id?: SeriesAoConfig["id"];
    index?: SeriesAoConfig["index"];
    name?: SeriesAoConfig["name"];
    className?: SeriesAoConfig["className"];
    color?: SeriesAoConfig["color"];
    events?: SeriesAoConfig["events"];
    options?: SeriesAoConfig;
}
/**
 * Awesome Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`
 *
 * Renders the `ao` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <AOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ao
 */
export declare function AOSeries(_props: AOSeriesProps): any;
export declare namespace AOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AO;
