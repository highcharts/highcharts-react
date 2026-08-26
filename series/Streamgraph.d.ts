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
import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A streamgraph is a type of stacked area graph which is displaced around a
 * central axis, resulting in a flowing, organic shape.
 *
 * A ready-made chart with `chart.type` set to `streamgraph`. Declare the data
 * with `<Streamgraph.Series>`, or use `StreamgraphSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Streamgraph>
 *   <Streamgraph.Series data={[1, 2, 3]} />
 * </Streamgraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.streamgraph
 */
declare function Streamgraph(props: ICommonAttributes): React.JSX.Element;
declare namespace Streamgraph {
    export { StreamgraphSeries as Series };
    export var type: string;
}
type SeriesStreamgraphConfig = Omit<SeriesStreamgraphOptions, "type">;
/** Props for the `<StreamgraphSeries />` component. */
export interface StreamgraphSeriesProps {
    id?: SeriesStreamgraphConfig["id"];
    index?: SeriesStreamgraphConfig["index"];
    name?: SeriesStreamgraphConfig["name"];
    className?: SeriesStreamgraphConfig["className"];
    color?: SeriesStreamgraphConfig["color"];
    events?: SeriesStreamgraphConfig["events"];
    data?: SeriesStreamgraphConfig["data"];
    options?: SeriesStreamgraphConfig;
}
/**
 * A streamgraph is a type of stacked area graph which is displaced around a
 * central axis, resulting in a flowing, organic shape.
 *
 * Renders the `streamgraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <StreamgraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.streamgraph
 */
export declare function StreamgraphSeries(_props: StreamgraphSeriesProps): any;
export declare namespace StreamgraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Streamgraph;
