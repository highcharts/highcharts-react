/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Heatmap series
 */
declare const Heatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeatmapSeries;
    type: string;
};
interface HeatmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHeatmapOptions>;
    children?: React.ReactNode;
}
export declare function HeatmapSeries(_props: HeatmapSeriesProps): any;
export declare namespace HeatmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Heatmap;
