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
import type { SeriesFlowmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * FlowMap series
 */
declare const FlowMap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FlowMapSeries;
    type: string;
};
type SeriesFlowmapConfig = Omit<SeriesFlowmapOptions, "type">;
export interface FlowMapSeriesProps {
    id?: SeriesFlowmapConfig["id"];
    index?: SeriesFlowmapConfig["index"];
    name?: SeriesFlowmapConfig["name"];
    className?: SeriesFlowmapConfig["className"];
    color?: SeriesFlowmapConfig["color"];
    events?: SeriesFlowmapConfig["events"];
    data?: SeriesFlowmapConfig["data"];
    options?: SeriesFlowmapConfig;
}
export declare function FlowMapSeries(_props: FlowMapSeriesProps): any;
export declare namespace FlowMapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default FlowMap;
