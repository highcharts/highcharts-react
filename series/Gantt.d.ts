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
export interface GanttSeriesProps {
    type?: "gantt";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesGanttOptions, "type">;
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
