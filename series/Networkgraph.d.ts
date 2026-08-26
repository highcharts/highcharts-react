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
import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A networkgraph is a type of relationship chart, where connections (links)
 * attracts nodes (points) and other nodes repulse each other.
 *
 * A ready-made chart with `chart.type` set to `networkgraph`. Declare the data
 * with `<Networkgraph.Series>`, or use `NetworkgraphSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Networkgraph>
 *   <Networkgraph.Series data={[1, 2, 3]} />
 * </Networkgraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.networkgraph
 */
declare function Networkgraph(props: ICommonAttributes): React.JSX.Element;
declare namespace Networkgraph {
    export { NetworkgraphSeries as Series };
    export var type: string;
}
type SeriesNetworkgraphConfig = Omit<SeriesNetworkgraphOptions, "type">;
/** Props for the `<NetworkgraphSeries />` component. */
export interface NetworkgraphSeriesProps {
    id?: SeriesNetworkgraphConfig["id"];
    index?: SeriesNetworkgraphConfig["index"];
    name?: SeriesNetworkgraphConfig["name"];
    className?: SeriesNetworkgraphConfig["className"];
    color?: SeriesNetworkgraphConfig["color"];
    events?: SeriesNetworkgraphConfig["events"];
    data?: SeriesNetworkgraphConfig["data"];
    options?: SeriesNetworkgraphConfig;
}
/**
 * A networkgraph is a type of relationship chart, where connections (links)
 * attracts nodes (points) and other nodes repulse each other.
 *
 * Renders the `networkgraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <NetworkgraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.networkgraph
 */
export declare function NetworkgraphSeries(_props: NetworkgraphSeriesProps): any;
export declare namespace NetworkgraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Networkgraph;
