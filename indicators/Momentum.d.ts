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
import type { SeriesMomentumOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `momentum`. Declare the data
 * with `<Momentum.Series>`, or use `MomentumSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Momentum>
 *   <Momentum.Series options={{ linkedTo: 'prices' }} />
 * </Momentum>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.momentum
 */
declare function Momentum(props: ICommonAttributes): React.JSX.Element;
declare namespace Momentum {
    export { MomentumSeries as Series };
    export var type: string;
}
type SeriesMomentumConfig = Omit<SeriesMomentumOptions, "type">;
/** Props for the `<MomentumSeries />` component. */
export interface MomentumSeriesProps {
    id?: SeriesMomentumConfig["id"];
    index?: SeriesMomentumConfig["index"];
    name?: SeriesMomentumConfig["name"];
    className?: SeriesMomentumConfig["className"];
    color?: SeriesMomentumConfig["color"];
    events?: SeriesMomentumConfig["events"];
    options?: SeriesMomentumConfig;
}
/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * Renders the `momentum` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <MomentumSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.momentum
 */
export declare function MomentumSeries(_props: MomentumSeriesProps): any;
export declare namespace MomentumSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Momentum;
