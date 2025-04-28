/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React from "react";
import type { SeriesPyramid3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pyramid3d series
 */
declare const Pyramid3d: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Pyramid3dSeries;
    type: string;
};
interface Pyramid3dSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPyramid3dOptions>;
    children?: React.ReactNode;
}
export declare function Pyramid3dSeries(_props: Pyramid3dSeriesProps): any;
export declare namespace Pyramid3dSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Pyramid3d;
