/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function Pyramid3dSeries(_props: Pyramid3dSeriesProps): any;
export declare namespace Pyramid3dSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Pyramid3d;
