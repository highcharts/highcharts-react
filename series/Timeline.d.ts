/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
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
export interface TimelineSeriesProps {
    type?: "timeline";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesTimelineOptions, "type">;
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
