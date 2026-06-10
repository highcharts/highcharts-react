/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import HC from "highcharts/es-modules/masters/highcharts.src.js";
export declare let Highcharts: typeof HC;
type LoggerType = {
    logLevel: "silent" | "debug";
    log(...content: any[]): void;
};
export declare const Logger: LoggerType;
/**
 * Sets the global Highcharts reference.
 *
 * If no argument is provided, resets Highcharts to the default instance.
 */
export declare function setHighcharts(newHC?: typeof HC): void;
/**
 * Returns the current global Highcharts reference.
 *
 */
export declare function getHighcharts(): typeof HC & {
    __provided?: boolean;
};
/** Type for the <Chart /> options prop. */
export type ChartOptions = HC.Options;
type SeriesType = HC.SeriesOptionsType["type"];
export type SeriesOptions<K extends SeriesType = SeriesType> = {
    [T in K]: Omit<Extract<HC.SeriesOptionsType, {
        type: T;
    }>, "type">;
}[K];
export type SeriesProps<K extends SeriesType = "line"> = {
    [F in Extract<"id" | "index" | "name" | "type" | "className" | "color" | "events" | "data", keyof SeriesOptions<K>> as SeriesOptions<K>[F] extends undefined ? never : F]?: SeriesOptions<K>[F];
} & {
    type?: K;
    options?: SeriesOptions<K>;
};
type SeriesComponentProps<K extends SeriesType = SeriesType> = {
    [T in K]: SeriesProps<T> & {
        type?: T;
    };
}[K];
export interface HighchartsReactRefObject {
    chart: Highcharts.Chart;
    container: HTMLDivElement;
}
export interface ICommonAttributes {
    /** Reference to the chart object. */
    ref?: React.Ref<HighchartsReactRefObject>;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    highcharts?: typeof HC;
    /** Options override - applied first, other props are merged in. */
    options?: ChartOptions;
    /** Constructor to use */
    chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
    /** Converts React elements to static HTML strings. Uses built-in renderer if not provided. */
    renderToHTML?: (element: unknown) => string;
    /** Children */
    children?: React.ReactNode;
    /** Links to Highcharts.Options.title.text */
    title?: string;
    /** Links to Highcharts.Options.subtitle.text */
    subtitle?: string;
    /** Links to Highcharts.Options.caption.text */
    caption?: string;
    /** Links to Highcharts.Options.credits.text */
    credits?: string;
    /** Links to Highcharts.Options.chart.type */
    type?: string;
    /** Links to Highcharts.Options.chart.height */
    height?: number | string;
    /** Links to Highcharts.Options.chart.width */
    width?: number | string;
    /** Links to Highcharts.Options.chart.inverted */
    inverted?: boolean;
    /** Links to Highcharts.Options.chart.animation */
    animation?: boolean | object;
    /** Links to Highcharts.Options.chart.styledMode */
    styledMode?: boolean;
    /** Links to Highcharts.Options.chart.backgroundColor */
    backgroundColor?: string;
    /** Links to Highcharts.Options.chart.borderColor */
    borderColor?: string;
    /** Links to Highcharts.Options.chart.borderWidth */
    borderWidth?: number;
    /** Links to Highcharts.Options.chart.margin */
    margin?: number | number[];
    /** Links to Highcharts.Options.chart.spacing */
    spacing?: number | number[];
    /** Links to Highcharts.Options.colors */
    colors?: string[];
}
export declare const Chart: React.ForwardRefExoticComponent<Omit<ICommonAttributes, "ref"> & React.RefAttributes<unknown>>;
export declare function Series(props: SeriesComponentProps): any;
export declare namespace Series {
    var type: string;
}
export default Chart;
