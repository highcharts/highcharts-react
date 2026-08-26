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
import type { SeriesAbandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Acceleration bands (ABANDS). This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `abands`. Declare the data with
 * `<ABands.Series>`, or use `ABandsSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ABands>
 *   <ABands.Series options={{ linkedTo: 'prices' }} />
 * </ABands>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.abands
 */
declare function ABands(props: ICommonAttributes): React.JSX.Element;
declare namespace ABands {
    export { ABandsSeries as Series };
    export var type: string;
}
type SeriesAbandsConfig = Omit<SeriesAbandsOptions, "type">;
/** Props for the `<ABandsSeries />` component. */
export interface ABandsSeriesProps {
    id?: SeriesAbandsConfig["id"];
    index?: SeriesAbandsConfig["index"];
    name?: SeriesAbandsConfig["name"];
    className?: SeriesAbandsConfig["className"];
    color?: SeriesAbandsConfig["color"];
    events?: SeriesAbandsConfig["events"];
    options?: SeriesAbandsConfig;
}
/**
 * Acceleration bands (ABANDS). This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `abands` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ABandsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.abands
 */
export declare function ABandsSeries(_props: ABandsSeriesProps): any;
export declare namespace ABandsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ABands;
