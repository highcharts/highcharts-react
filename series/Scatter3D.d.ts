/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesScatter3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Scatter3D series
 */
declare const Scatter3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Scatter3DSeries;
    type: string;
};
export interface Scatter3DSeriesProps {
    type?: "scatter3d";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesScatter3DOptions, "type">;
}
export declare function Scatter3DSeries(_props: Scatter3DSeriesProps): any;
export declare namespace Scatter3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Scatter3D;
