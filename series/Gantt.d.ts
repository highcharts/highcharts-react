/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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
}
export declare function GanttSeries(_props: GanttSeriesProps): any;
export declare namespace GanttSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Gantt;
