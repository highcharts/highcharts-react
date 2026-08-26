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
import type { SeriesPsarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Parabolic SAR. This series requires `linkedTo` option to be set and should
 * be loaded after `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `psar`. Declare the data with
 * `<PSAR.Series>`, or use `PSARSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PSAR>
 *   <PSAR.Series options={{ linkedTo: 'prices' }} />
 * </PSAR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.psar
 */
declare function PSAR(props: ICommonAttributes): React.JSX.Element;
declare namespace PSAR {
    export { PSARSeries as Series };
    export var type: string;
}
type SeriesPsarConfig = Omit<SeriesPsarOptions, "type">;
/** Props for the `<PSARSeries />` component. */
export interface PSARSeriesProps {
    id?: SeriesPsarConfig["id"];
    index?: SeriesPsarConfig["index"];
    name?: SeriesPsarConfig["name"];
    className?: SeriesPsarConfig["className"];
    color?: SeriesPsarConfig["color"];
    events?: SeriesPsarConfig["events"];
    options?: SeriesPsarConfig;
}
/**
 * Parabolic SAR. This series requires `linkedTo` option to be set and should
 * be loaded after `stock/indicators/indicators.js` file.
 *
 * Renders the `psar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PSARSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.psar
 */
export declare function PSARSeries(_props: PSARSeriesProps): any;
export declare namespace PSARSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PSAR;
