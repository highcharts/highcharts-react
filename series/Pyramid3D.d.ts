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
import type { SeriesPyramid3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pyramid3D series
 */
declare const Pyramid3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Pyramid3DSeries;
    type: string;
};
export interface Pyramid3DSeriesProps {
    type?: "pyramid3d";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPyramid3DOptions, "type">;
}
export declare function Pyramid3DSeries(_props: Pyramid3DSeriesProps): any;
export declare namespace Pyramid3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid3D;
