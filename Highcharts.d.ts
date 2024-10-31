/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React from "react";
import HC from "highcharts/es-modules/masters/highcharts.src.js";
export declare const HighchartsNS: typeof HC;
export type WithoutType<T> = Omit<T, "type">;
export interface ICommonSeriesAttributes {
    type?: HC.SeriesOptionsType["type"];
    data?: number[] | Object;
    options?: WithoutType<HC.SeriesOptionsType>;
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
}
export declare function Highcharts(props: ICommonAttributes): React.JSX.Element;
export declare namespace Highcharts {
    var Series: typeof HighchartsSeries;
}
export interface HighchartsSeriesProps extends ICommonSeriesAttributes {
    type: HC.SeriesOptionsType["type"];
}
export declare function HighchartsSeries(props: HighchartsSeriesProps): any;
export declare namespace HighchartsSeries {
    var type: string;
}
export default Highcharts;
