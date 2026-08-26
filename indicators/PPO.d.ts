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
import type { SeriesPpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Percentage Price Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `ppo`. Declare the data with
 * `<PPO.Series>`, or use `PPOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PPO>
 *   <PPO.Series options={{ linkedTo: 'prices' }} />
 * </PPO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ppo
 */
declare function PPO(props: ICommonAttributes): React.JSX.Element;
declare namespace PPO {
    export { PPOSeries as Series };
    export var type: string;
}
type SeriesPpoConfig = Omit<SeriesPpoOptions, "type">;
/** Props for the `<PPOSeries />` component. */
export interface PPOSeriesProps {
    id?: SeriesPpoConfig["id"];
    index?: SeriesPpoConfig["index"];
    name?: SeriesPpoConfig["name"];
    className?: SeriesPpoConfig["className"];
    color?: SeriesPpoConfig["color"];
    events?: SeriesPpoConfig["events"];
    options?: SeriesPpoConfig;
}
/**
 * Percentage Price Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `ppo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PPOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ppo
 */
export declare function PPOSeries(_props: PPOSeriesProps): any;
export declare namespace PPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PPO;
