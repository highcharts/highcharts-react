/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesTreemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Treemap series
 */
declare const Treemap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreemapSeries;
    type: string;
};
type SeriesTreemapConfig = Omit<SeriesTreemapOptions, "type">;
export interface TreemapSeriesProps {
    id?: SeriesTreemapConfig["id"];
    index?: SeriesTreemapConfig["index"];
    name?: SeriesTreemapConfig["name"];
    className?: SeriesTreemapConfig["className"];
    color?: SeriesTreemapConfig["color"];
    events?: SeriesTreemapConfig["events"];
    data?: SeriesTreemapConfig["data"];
    options?: SeriesTreemapConfig;
}
export declare function TreemapSeries(_props: TreemapSeriesProps): any;
export declare namespace TreemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treemap;
