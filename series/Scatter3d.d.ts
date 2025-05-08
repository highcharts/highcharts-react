/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React from "react";
import type { SeriesScatter3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Scatter3d series
 */
declare const Scatter3d: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Scatter3dSeries;
    type: string;
};
interface Scatter3dSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesScatter3dOptions>;
    children?: React.ReactNode;
}
export declare function Scatter3dSeries(_props: Scatter3dSeriesProps): any;
export declare namespace Scatter3dSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Scatter3d;
