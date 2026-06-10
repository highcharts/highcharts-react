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
import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Streamgraph series
 */
declare const Streamgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StreamgraphSeries;
    type: string;
};
type SeriesStreamgraphConfig = Omit<SeriesStreamgraphOptions, "type">;
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
