/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesBoxPlotOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * BoxPlot series
 */
declare const BoxPlot: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BoxPlotSeries;
    type: string;
};
interface BoxPlotSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBoxPlotOptions>;
    children?: React.ReactNode;
}
export declare function BoxPlotSeries(_props: BoxPlotSeriesProps): any;
export declare namespace BoxPlotSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default BoxPlot;
