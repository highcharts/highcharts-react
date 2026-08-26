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
import type { SeriesScatterOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A scatter plot uses cartesian coordinates to display values for two
 * variables for a set of data.
 *
 * A ready-made chart with `chart.type` set to `scatter`. Declare the data with
 * `<Scatter.Series>`, or use `ScatterSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Scatter>
 *   <Scatter.Series data={[1, 2, 3]} />
 * </Scatter>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.scatter
 */
declare function Scatter(props: ICommonAttributes): React.JSX.Element;
declare namespace Scatter {
    export { ScatterSeries as Series };
    export var type: string;
}
type SeriesScatterConfig = Omit<SeriesScatterOptions, "type">;
/** Props for the `<ScatterSeries />` component. */
export interface ScatterSeriesProps {
    id?: SeriesScatterConfig["id"];
    index?: SeriesScatterConfig["index"];
    name?: SeriesScatterConfig["name"];
    className?: SeriesScatterConfig["className"];
    color?: SeriesScatterConfig["color"];
    events?: SeriesScatterConfig["events"];
    data?: SeriesScatterConfig["data"];
    options?: SeriesScatterConfig;
}
/**
 * A scatter plot uses cartesian coordinates to display values for two
 * variables for a set of data.
 *
 * Renders the `scatter` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ScatterSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.scatter
 */
export declare function ScatterSeries(_props: ScatterSeriesProps): any;
export declare namespace ScatterSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Scatter;
