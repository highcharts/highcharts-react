/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-11-25
 *
 */
import React from "react";
import * as HC from "highcharts/highcharts.js";
export { HC as Highcharts };
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
    chart: HC.Chart;
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
    /**
     * Called once when the chart has loaded, with the chart instance as the
     * argument and as `this`. Not called again on updates. Use the `chart`
     * argument rather than the component `ref`, which is not set yet at that
     * point. Also called for the chart copy made on export, where
     * `chart.renderer.forExport` is `true`.
     */
    callback?: (this: HC.Chart, chart: HC.Chart) => void;
    /** Children */
    children?: React.ReactNode;
    /** Links to Highcharts.Options.title.text */
    title?: NonNullable<ChartOptions["title"]>["text"];
    /** Links to Highcharts.Options.subtitle.text */
    subtitle?: NonNullable<ChartOptions["subtitle"]>["text"];
    /** Links to Highcharts.Options.caption.text */
    caption?: NonNullable<ChartOptions["caption"]>["text"];
    /** Links to Highcharts.Options.credits.text */
    credits?: NonNullable<ChartOptions["credits"]>["text"];
    /** Links to Highcharts.Options.chart.type */
    type?: NonNullable<ChartOptions["chart"]>["type"];
    /** Links to Highcharts.Options.chart.height */
    height?: NonNullable<ChartOptions["chart"]>["height"];
    /** Links to Highcharts.Options.chart.width */
    width?: NonNullable<ChartOptions["chart"]>["width"];
    /** Links to Highcharts.Options.chart.inverted */
    inverted?: NonNullable<ChartOptions["chart"]>["inverted"];
    /** Links to Highcharts.Options.chart.animation */
    animation?: NonNullable<ChartOptions["chart"]>["animation"];
    /** Links to Highcharts.Options.chart.styledMode */
    styledMode?: NonNullable<ChartOptions["chart"]>["styledMode"];
    /** Links to Highcharts.Options.chart.backgroundColor */
    backgroundColor?: NonNullable<ChartOptions["chart"]>["backgroundColor"];
    /** Links to Highcharts.Options.chart.borderColor */
    borderColor?: NonNullable<ChartOptions["chart"]>["borderColor"];
    /** Links to Highcharts.Options.chart.borderWidth */
    borderWidth?: NonNullable<ChartOptions["chart"]>["borderWidth"];
    /** Links to Highcharts.Options.chart.margin */
    margin?: NonNullable<ChartOptions["chart"]>["margin"];
    /** Links to Highcharts.Options.chart.spacing */
    spacing?: number | number[];
    /** Links to Highcharts.Options.colors */
    colors?: ChartOptions["colors"];
    /** Links to Highcharts.Options.dataTable */
    dataTable?: ChartOptions["dataTable"];
}
/**
 * The chart container. Renders a Highcharts chart and keeps it in sync with
 * its props and children.
 *
 * Declare the series as children, either with a dedicated component such as
 * `LineSeries` or with the generic `Series`, and configure the chart with
 * option components such as `Title` or `Tooltip`. Options passed through the
 * `options` prop are merged in first, direct props next, and children last.
 *
 * @example
 * import { Chart, Title } from '@highcharts/react';
 * import { LineSeries } from '@highcharts/react/series/Line';
 *
 * <Chart>
 *   <Title>Monthly sales</Title>
 *   <LineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://www.highcharts.com/docs/react/components/chart
 */
export declare const Chart: React.ForwardRefExoticComponent<Omit<ICommonAttributes, "ref"> & React.RefAttributes<unknown>>;
/**
 * A chart series whose type is set with the `type` prop.
 *
 * For a fixed type, prefer a dedicated component such as `LineSeries` for the
 * best autocomplete. Reach for `Series` when the type is dynamic, e.g.
 * `<Series type={type} data={data} />`. For full type safety on advanced
 * settings, pass them through the `options` prop.
 *
 * @example
 * import { Series } from '@highcharts/react';
 *
 * <Series type="line" data={[1, 2, 3]} />
 */
export declare function Series<K extends SeriesType = SeriesType>(props: SeriesProps<K>): any;
export declare namespace Series {
    var type: string;
}
export default Chart;
