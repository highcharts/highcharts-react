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
import type { SeriesTreegraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Treegraph series
 */
declare const Treegraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreegraphSeries;
    type: string;
};
type SeriesTreegraphConfig = Omit<SeriesTreegraphOptions, "type">;
export interface TreegraphSeriesProps {
    id?: SeriesTreegraphConfig["id"];
    index?: SeriesTreegraphConfig["index"];
    name?: SeriesTreegraphConfig["name"];
    className?: SeriesTreegraphConfig["className"];
    color?: SeriesTreegraphConfig["color"];
    events?: SeriesTreegraphConfig["events"];
    data?: SeriesTreegraphConfig["data"];
    options?: SeriesTreegraphConfig;
}
export declare function TreegraphSeries(_props: TreegraphSeriesProps): any;
export declare namespace TreegraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treegraph;
