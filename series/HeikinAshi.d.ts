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
import type { SeriesHeikinAshiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * HeikinAshi series
 */
declare const HeikinAshi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeikinAshiSeries;
    type: string;
};
export interface HeikinAshiSeriesProps {
    type?: "heikinashi";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesHeikinAshiOptions, "type">;
}
export declare function HeikinAshiSeries(_props: HeikinAshiSeriesProps): any;
export declare namespace HeikinAshiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HeikinAshi;
