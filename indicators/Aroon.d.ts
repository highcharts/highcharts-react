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
import type { SeriesAroonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Aroon. This series requires the `linkedTo` option to be set and should be
 * loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `aroon`. Declare the data with
 * `<Aroon.Series>`, or use `AroonSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Aroon>
 *   <Aroon.Series options={{ linkedTo: 'prices' }} />
 * </Aroon>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.aroon
 */
declare function Aroon(props: ICommonAttributes): React.JSX.Element;
declare namespace Aroon {
    export { AroonSeries as Series };
    export var type: string;
}
type SeriesAroonConfig = Omit<SeriesAroonOptions, "type">;
/** Props for the `<AroonSeries />` component. */
export interface AroonSeriesProps {
    id?: SeriesAroonConfig["id"];
    index?: SeriesAroonConfig["index"];
    name?: SeriesAroonConfig["name"];
    className?: SeriesAroonConfig["className"];
    color?: SeriesAroonConfig["color"];
    events?: SeriesAroonConfig["events"];
    options?: SeriesAroonConfig;
}
/**
 * Aroon. This series requires the `linkedTo` option to be set and should be
 * loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `aroon` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <AroonSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.aroon
 */
export declare function AroonSeries(_props: AroonSeriesProps): any;
export declare namespace AroonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Aroon;
