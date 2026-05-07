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
import type { SeriesGanttOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Gantt series
 */
declare const Gantt: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GanttSeries;
    type: string;
};
type SeriesGanttConfig = Omit<SeriesGanttOptions, "type">;
export interface GanttSeriesProps {
    id?: SeriesGanttConfig["id"];
    index?: SeriesGanttConfig["index"];
    name?: SeriesGanttConfig["name"];
    className?: SeriesGanttConfig["className"];
    color?: SeriesGanttConfig["color"];
    events?: SeriesGanttConfig["events"];
    data?: SeriesGanttConfig["data"];
    options?: SeriesGanttConfig;
}
export declare function GanttSeries(_props: GanttSeriesProps): any;
export declare namespace GanttSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Gantt;
