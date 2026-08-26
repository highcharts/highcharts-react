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
import type { SeriesDemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Double exponential moving average (DEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `dema`. Declare the data with
 * `<DEMA.Series>`, or use `DEMASeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DEMA>
 *   <DEMA.Series options={{ linkedTo: 'prices' }} />
 * </DEMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.dema
 */
declare function DEMA(props: ICommonAttributes): React.JSX.Element;
declare namespace DEMA {
    export { DEMASeries as Series };
    export var type: string;
}
type SeriesDemaConfig = Omit<SeriesDemaOptions, "type">;
/** Props for the `<DEMASeries />` component. */
export interface DEMASeriesProps {
    id?: SeriesDemaConfig["id"];
    index?: SeriesDemaConfig["index"];
    name?: SeriesDemaConfig["name"];
    className?: SeriesDemaConfig["className"];
    color?: SeriesDemaConfig["color"];
    events?: SeriesDemaConfig["events"];
    options?: SeriesDemaConfig;
}
/**
 * Double exponential moving average (DEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * Renders the `dema` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DEMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.dema
 */
export declare function DEMASeries(_props: DEMASeriesProps): any;
export declare namespace DEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DEMA;
