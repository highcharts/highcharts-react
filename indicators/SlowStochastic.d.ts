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
import type { SeriesSlowstochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after `stock/indicators/indicators.js` and
 * `stock/indicators/stochastic.js` files.
 *
 * A ready-made chart with `chart.type` set to `slowstochastic`. Declare the
 * data with `<SlowStochastic.Series>`, or use `SlowStochasticSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <SlowStochastic>
 *   <SlowStochastic.Series options={{ linkedTo: 'prices' }} />
 * </SlowStochastic>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.slowstochastic
 */
declare function SlowStochastic(props: ICommonAttributes): React.JSX.Element;
declare namespace SlowStochastic {
    export { SlowStochasticSeries as Series };
    export var type: string;
}
type SeriesSlowstochasticConfig = Omit<SeriesSlowstochasticOptions, "type">;
/** Props for the `<SlowStochasticSeries />` component. */
export interface SlowStochasticSeriesProps {
    id?: SeriesSlowstochasticConfig["id"];
    index?: SeriesSlowstochasticConfig["index"];
    name?: SeriesSlowstochasticConfig["name"];
    className?: SeriesSlowstochasticConfig["className"];
    color?: SeriesSlowstochasticConfig["color"];
    events?: SeriesSlowstochasticConfig["events"];
    options?: SeriesSlowstochasticConfig;
}
/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after `stock/indicators/indicators.js` and
 * `stock/indicators/stochastic.js` files.
 *
 * Renders the `slowstochastic` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <SlowStochasticSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.slowstochastic
 */
export declare function SlowStochasticSeries(_props: SlowStochasticSeriesProps): any;
export declare namespace SlowStochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SlowStochastic;
