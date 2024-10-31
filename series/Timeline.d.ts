/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React from "react";
import type { SeriesTimelineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Timeline series
 */
declare const Timeline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TimelineSeries;
    type: string;
};
interface TimelineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTimelineOptions>;
}
export declare function TimelineSeries(_props: TimelineSeriesProps): any;
export declare namespace TimelineSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Timeline;
