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
import type { SeriesFunnel3DOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Funnel3D series
 */
declare const Funnel3D: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof Funnel3DSeries;
    type: string;
};
export interface Funnel3DSeriesProps {
    type?: "funnel3d";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesFunnel3DOptions, "type">;
}
export declare function Funnel3DSeries(_props: Funnel3DSeriesProps): any;
export declare namespace Funnel3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel3D;
