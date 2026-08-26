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
import HC from "highcharts/es-modules/masters/highstock.src.js";
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
/** Union of every series type available in the loaded Highcharts modules. */
export type SeriesType = HC.SeriesOptionsType["type"];
/** Options of a given series type, without the `type` key itself. */
export type SeriesOptions<K extends SeriesType = SeriesType> = {
    [T in K]: Omit<Extract<HC.SeriesOptionsType, {
        type: T;
    }>, "type">;
}[K];
type SeriesFieldValue<K extends SeriesType, F extends "id" | "index" | "name" | "type" | "className" | "color" | "events" | "data"> = K extends unknown ? F extends keyof SeriesOptions<K> ? SeriesOptions<K>[F] extends undefined ? never : SeriesOptions<K>[F] : never : never;
/**
 * Props of a series component: the most common options of the series type
 * `K` as direct props, plus `options` for everything else.
 */
export type SeriesProps<K extends SeriesType = "line"> = {
    [F in "id" | "index" | "name" | "type" | "className" | "color" | "events" | "data" as SeriesFieldValue<K, F> extends never ? never : F]?: SeriesFieldValue<K, F>;
} & {
    type?: K;
    options?: SeriesOptions<K>;
};
/** Shape of the object exposed through the chart component `ref`. */
export interface HighchartsReactRefObject {
    chart: Highcharts.Chart;
    container: HTMLDivElement;
}
/** Props shared by every chart component. */
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
    /** Links to Highcharts.Options.dataTable */
    dataTable?: ChartOptions["dataTable"];
}
/**
 * The chart container for Highcharts Stock. Adds the navigator, range selector
 * and scrollbar on top of what `Chart` renders.
 *
 * Declare the series as children, either with a dedicated component such as
 * `CandlestickSeries` or with the generic `StockSeries`, and configure the
 * chart with option components such as `Title` or `Tooltip`. Options passed
 * through the `options` prop are merged in first, direct props next, and
 * children last.
 *
 * @example
 * <StockChart>
 *   <Title>Price history</Title>
 *   <CandlestickSeries data={ohlc} />
 * </StockChart>
 *
 * @see https://www.highcharts.com/docs/react/components/chart
 */
export declare const StockChart: React.ForwardRefExoticComponent<Omit<ICommonAttributes, "ref"> & React.RefAttributes<unknown>>;
/**
 * A chart series whose type is set with the `type` prop.
 *
 * For a fixed type, prefer a dedicated component such as `CandlestickSeries`
 * for the best autocomplete. Reach for `StockSeries` when the type is dynamic,
 * e.g. `<StockSeries type={type} data={data} />`. For full type safety on
 * advanced settings, pass them through the `options` prop.
 *
 * @example
 * <StockSeries type="candlestick" data={ohlc} />
 */
export declare function StockSeries<K extends SeriesType = SeriesType>(props: SeriesProps<K>): any;
export declare namespace StockSeries {
    var type: string;
}
export default StockChart;
