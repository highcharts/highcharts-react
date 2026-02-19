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
import HC from "highcharts/esm/highcharts.src.js";
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
export type HighchartsOptionsType = HC.Options;
export type SeriesProps = {
    [K in HC.SeriesOptionsType["type"]]: {
        type?: K;
        data?: number[] | Object;
        id?: string;
        className?: string;
        options?: Omit<Extract<HC.SeriesOptionsType, {
            type: K;
        }>, "type">;
    };
}[HC.SeriesOptionsType["type"]];
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
    options?: HighchartsOptionsType;
    /** Constructor to use */
    chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
    /** Converts React elements to static HTML strings. Uses built-in renderer if not provided. */
    renderToHTML?: (element: unknown) => string;
    /** Children */
    children?: React.ReactNode;
    /** Links to Highcharts.Options.title.text */
    title?: string;
}
export declare const Chart: React.ForwardRefExoticComponent<Omit<ICommonAttributes, "ref"> & React.RefAttributes<unknown>>;
export declare function Series(props: SeriesProps): any;
export declare namespace Series {
    var type: string;
}
export default Chart;
