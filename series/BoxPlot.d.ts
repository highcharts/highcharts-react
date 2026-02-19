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
import type { SeriesBoxPlotOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * BoxPlot series
 */
declare const BoxPlot: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BoxPlotSeries;
    type: string;
};
export interface BoxPlotSeriesProps {
    type?: "boxplot";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesBoxPlotOptions, "type">;
}
export declare function BoxPlotSeries(_props: BoxPlotSeriesProps): any;
export declare namespace BoxPlotSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BoxPlot;
