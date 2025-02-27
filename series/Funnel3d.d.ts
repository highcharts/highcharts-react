/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-27
 *
 */
import React from "react";
import type { SeriesFunnel3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Funnel3d series
 */
declare const Funnel3d: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Funnel3dSeries;
    type: string;
};
interface Funnel3dSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFunnel3dOptions>;
    children?: React.ReactNode;
}
export declare function Funnel3dSeries(_props: Funnel3dSeriesProps): any;
export declare namespace Funnel3dSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Funnel3d;
