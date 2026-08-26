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
import type { SeriesTemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Triple exponential moving average (TEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `tema`. Declare the data with
 * `<TEMA.Series>`, or use `TEMASeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <TEMA>
 *   <TEMA.Series options={{ linkedTo: 'prices' }} />
 * </TEMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.tema
 */
declare function TEMA(props: ICommonAttributes): React.JSX.Element;
declare namespace TEMA {
    export { TEMASeries as Series };
    export var type: string;
}
type SeriesTemaConfig = Omit<SeriesTemaOptions, "type">;
/** Props for the `<TEMASeries />` component. */
export interface TEMASeriesProps {
    id?: SeriesTemaConfig["id"];
    index?: SeriesTemaConfig["index"];
    name?: SeriesTemaConfig["name"];
    className?: SeriesTemaConfig["className"];
    color?: SeriesTemaConfig["color"];
    events?: SeriesTemaConfig["events"];
    options?: SeriesTemaConfig;
}
/**
 * Triple exponential moving average (TEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * Renders the `tema` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <TEMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.tema
 */
export declare function TEMASeries(_props: TEMASeriesProps): any;
export declare namespace TEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TEMA;
