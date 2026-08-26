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
import type { SeriesStochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Stochastic oscillator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `stochastic`. Declare the data
 * with `<Stochastic.Series>`, or use `StochasticSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Stochastic>
 *   <Stochastic.Series options={{ linkedTo: 'prices' }} />
 * </Stochastic>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.stochastic
 */
declare function Stochastic(props: ICommonAttributes): React.JSX.Element;
declare namespace Stochastic {
    export { StochasticSeries as Series };
    export var type: string;
}
type SeriesStochasticConfig = Omit<SeriesStochasticOptions, "type">;
/** Props for the `<StochasticSeries />` component. */
export interface StochasticSeriesProps {
    id?: SeriesStochasticConfig["id"];
    index?: SeriesStochasticConfig["index"];
    name?: SeriesStochasticConfig["name"];
    className?: SeriesStochasticConfig["className"];
    color?: SeriesStochasticConfig["color"];
    events?: SeriesStochasticConfig["events"];
    options?: SeriesStochasticConfig;
}
/**
 * Stochastic oscillator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `stochastic` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <StochasticSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.stochastic
 */
export declare function StochasticSeries(_props: StochasticSeriesProps): any;
export declare namespace StochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Stochastic;
