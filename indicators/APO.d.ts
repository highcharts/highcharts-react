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
import type { SeriesApoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Absolute Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `apo`. Declare the data with
 * `<APO.Series>`, or use `APOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <APO>
 *   <APO.Series options={{ linkedTo: 'prices' }} />
 * </APO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.apo
 */
declare function APO(props: ICommonAttributes): React.JSX.Element;
declare namespace APO {
    export { APOSeries as Series };
    export var type: string;
}
type SeriesApoConfig = Omit<SeriesApoOptions, "type">;
/** Props for the `<APOSeries />` component. */
export interface APOSeriesProps {
    id?: SeriesApoConfig["id"];
    index?: SeriesApoConfig["index"];
    name?: SeriesApoConfig["name"];
    className?: SeriesApoConfig["className"];
    color?: SeriesApoConfig["color"];
    events?: SeriesApoConfig["events"];
    options?: SeriesApoConfig;
}
/**
 * Absolute Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `apo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <APOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.apo
 */
export declare function APOSeries(_props: APOSeriesProps): any;
export declare namespace APOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default APO;
