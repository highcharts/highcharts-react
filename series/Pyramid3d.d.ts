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
import type { SeriesPyramid3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pyramid3D series
 */
declare const Pyramid3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Pyramid3DSeries;
    type: string;
};
interface Pyramid3DSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPyramid3DOptions>;
    children?: React.ReactNode;
}
export declare function Pyramid3DSeries(_props: Pyramid3DSeriesProps): any;
export declare namespace Pyramid3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Pyramid3D;
