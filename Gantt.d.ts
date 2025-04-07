/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */
import React from "react";
import HC from "highcharts/es-modules/masters/highcharts-gantt.src.js";
export declare let Highcharts: typeof HC;
export declare function setHighcharts(newHC?: typeof HC): void;
export declare function getHighcharts(): typeof HC & {
    __provided?: boolean;
};
export type WithoutType<T> = Omit<T, "type">;
export interface ICommonSeriesAttributes {
    type?: HC.SeriesOptionsType["type"];
    data?: number[] | Object;
    options?: WithoutType<HC.SeriesOptionsType>;
}
export interface ICommonAttributes {
    highcharts?: any;
    /** Options override - applied first, other props are merged in. */
    options?: HC.Options;
    /** Constructor to use */
    chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
    /** Children */
    children?: React.ReactNode;
    /** Links to Highcharts.Options.title.text */
    title?: string;
}
export declare function GanttChart(props: ICommonAttributes): React.JSX.Element;
export declare namespace GanttChart {
    var Series: typeof GanttSeries;
}
export interface GanttSeriesProps extends ICommonSeriesAttributes {
    type: HC.SeriesOptionsType["type"];
}
export declare function GanttSeries(props: GanttSeriesProps): any;
export declare namespace GanttSeries {
    var type: string;
}
export default GanttChart;
