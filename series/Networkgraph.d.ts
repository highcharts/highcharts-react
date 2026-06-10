/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Networkgraph series
 */
declare const Networkgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NetworkgraphSeries;
    type: string;
};
type SeriesNetworkgraphConfig = Omit<SeriesNetworkgraphOptions, "type">;
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
