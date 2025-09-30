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
import type { SeriesFunnel3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Funnel3D series
 */
declare const Funnel3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Funnel3DSeries;
    type: string;
};
interface Funnel3DSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFunnel3DOptions>;
    children?: React.ReactNode;
}
export declare function Funnel3DSeries(_props: Funnel3DSeriesProps): any;
export declare namespace Funnel3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Funnel3D;
