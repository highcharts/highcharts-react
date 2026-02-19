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
import type { SeriesVBPOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * VBP series
 */
declare const VBP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VBPSeries;
    type: string;
};
export interface VBPSeriesProps {
    type?: "vbp";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVBPOptions, "type">;
}
export declare function VBPSeries(_props: VBPSeriesProps): any;
export declare namespace VBPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VBP;
