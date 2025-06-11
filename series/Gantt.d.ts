/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React from "react";
import type { SeriesGanttOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Gantt series
 */
declare const Gantt: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GanttSeries;
    type: string;
};
interface GanttSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesGanttOptions>;
    children?: React.ReactNode;
}
export declare function GanttSeries(_props: GanttSeriesProps): any;
export declare namespace GanttSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Gantt;
