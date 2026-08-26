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
import type { SeriesTimelineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The timeline series presents given events along a drawn line.
 *
 * A ready-made chart with `chart.type` set to `timeline`. Declare the data
 * with `<Timeline.Series>`, or use `TimelineSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Timeline>
 *   <Timeline.Series data={[1, 2, 3]} />
 * </Timeline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.timeline
 */
declare function Timeline(props: ICommonAttributes): React.JSX.Element;
declare namespace Timeline {
    export { TimelineSeries as Series };
    export var type: string;
}
type SeriesTimelineConfig = Omit<SeriesTimelineOptions, "type">;
/** Props for the `<TimelineSeries />` component. */
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
/**
 * The timeline series presents given events along a drawn line.
 *
 * Renders the `timeline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TimelineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.timeline
 */
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
