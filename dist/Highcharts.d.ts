/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React from "react";
import HC from "highcharts/es-modules/masters/highcharts.src.js";
export declare const HighchartsNS: typeof HC;
export interface ICommonSeriesAttributes {
    type?: string;
    data?: number[] | Object;
    options?: HC.SeriesOptions;
    defaultProps?: {
        type: "string";
    };
}
export interface ICommonAttributes {
    /** Options override - applied first, other props are merged in. */
    options?: HC.Options;
    /** Constructor to use */
    chartConstructor?: "chart" | "stockChart" | "ganttChart" | "mapChart";
    /** Children */
    children?: React.ReactNode;
    /** Links to Highcharts.Options.title.text */
    title?: string;
    /** Links to Highcharts.Options.data.csv */
    csv?: string;
    /** Links to Highcharts.Options.data.csvURL */
    csvURL?: string;
}
export declare function Highcharts(props: ICommonAttributes): React.JSX.Element;
export declare namespace Highcharts {
    var Series: typeof HighchartsSeries;
}
export interface HighchartsSeriesProps extends ICommonSeriesAttributes {
    type: "arcdiagram" | "area" | "arearange" | "areaspline" | "areasplinerange" | "bar" | "bellcurve" | "boxplot" | "bubble" | "bullet" | "column" | "columnpyramid" | "columnrange" | "cylinder" | "dependencywheel" | "dumbbell" | "errorbar" | "funnel" | "funnel3d" | "gauge" | "heatmap" | "histogram" | "item" | "line" | "lollipop" | "networkgraph" | "organization" | "packedbubble" | "pareto" | "pictorial" | "pie" | "polygon" | "pyramid" | "pyramid3d" | "sankey" | "scatter" | "scatter3d" | "solidgauge" | "spline" | "streamgraph" | "sunburst" | "tilemap" | "timeline" | "treegraph" | "treemap" | "variablepie" | "variwide" | "vector" | "venn" | "waterfall" | "windbarb" | "wordcloud" | "xrange";
}
export declare function HighchartsSeries(props: HighchartsSeriesProps): any;
export declare namespace HighchartsSeries {
    var type: string;
}
export default Highcharts;
