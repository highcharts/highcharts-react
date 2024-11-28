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
import type { SeriesGeoheatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Geoheatmap series
 */
declare const Geoheatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GeoheatmapSeries;
    type: string;
};
interface GeoheatmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesGeoheatmapOptions>;
    children?: React.ReactNode;
}
export declare function GeoheatmapSeries(_props: GeoheatmapSeriesProps): any;
export declare namespace GeoheatmapSeries {
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
export default Geoheatmap;
