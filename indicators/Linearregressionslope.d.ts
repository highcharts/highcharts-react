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
import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Linear regression slope indicator. This series requires `linkedTo` option to
 * be set.
 *
 * A ready-made chart with `chart.type` set to `linearregressionslope`. Declare
 * the data with `<Linearregressionslope.Series>`, or use
 * `LinearregressionslopeSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Linearregressionslope>
 *   <Linearregressionslope.Series options={{ linkedTo: 'prices' }} />
 * </Linearregressionslope>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.linearregressionslope
 */
declare function Linearregressionslope(props: ICommonAttributes): React.JSX.Element;
declare namespace Linearregressionslope {
    export { LinearregressionslopeSeries as Series };
    export var type: string;
}
type SeriesLinearregressionslopeConfig = Omit<SeriesLinearregressionslopeOptions, "type">;
/** Props for the `<LinearregressionslopeSeries />` component. */
export interface LinearregressionslopeSeriesProps {
    id?: SeriesLinearregressionslopeConfig["id"];
    index?: SeriesLinearregressionslopeConfig["index"];
    name?: SeriesLinearregressionslopeConfig["name"];
    className?: SeriesLinearregressionslopeConfig["className"];
    color?: SeriesLinearregressionslopeConfig["color"];
    events?: SeriesLinearregressionslopeConfig["events"];
    options?: SeriesLinearregressionslopeConfig;
}
/**
 * Linear regression slope indicator. This series requires `linkedTo` option to
 * be set.
 *
 * Renders the `linearregressionslope` series type inside a chart component.
 * The most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearregressionslopeSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregressionslope
 */
export declare function LinearregressionslopeSeries(_props: LinearregressionslopeSeriesProps): any;
export declare namespace LinearregressionslopeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Linearregressionslope;
