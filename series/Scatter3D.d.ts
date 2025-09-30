/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesScatter3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Scatter3D series
 */
declare const Scatter3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Scatter3DSeries;
    type: string;
};
interface Scatter3DSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesScatter3DOptions>;
    children?: React.ReactNode;
}
export declare function Scatter3DSeries(_props: Scatter3DSeriesProps): any;
export declare namespace Scatter3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Scatter3D;
