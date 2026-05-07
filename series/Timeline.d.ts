/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesTimelineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Timeline series
 */
declare const Timeline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TimelineSeries;
    type: string;
};
type SeriesTimelineConfig = Omit<SeriesTimelineOptions, "type">;
export interface TimelineSeriesProps {
    id?: SeriesTimelineConfig["id"];
    index?: SeriesTimelineConfig["index"];
    name?: SeriesTimelineConfig["name"];
    className?: SeriesTimelineConfig["className"];
    color?: SeriesTimelineConfig["color"];
    events?: SeriesTimelineConfig["events"];
    data?: SeriesTimelineConfig["data"];
    options?: SeriesTimelineConfig;
}
export declare function TimelineSeries(_props: TimelineSeriesProps): any;
export declare namespace TimelineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Timeline;
