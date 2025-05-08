/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React from "react";
import HC from "highcharts/esm/highstock.src.js";
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
export interface HighchartsReactRefObject {
    chart: Highcharts.Chart;
    container: React.RefObject<HTMLDivElement>;
}
export interface ICommonAttributes {
    /** Reference to the chart object. */
    ref?: React.RefObject<HighchartsReactRefObject>;
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
export declare function StockChart(props: ICommonAttributes): React.JSX.Element;
export declare namespace StockChart {
    var Series: typeof StockSeries;
}
export interface StockSeriesProps extends ICommonSeriesAttributes {
    type: HC.SeriesOptionsType["type"];
}
export declare function StockSeries(props: StockSeriesProps): any;
export declare namespace StockSeries {
    var type: string;
}
export default StockChart;
