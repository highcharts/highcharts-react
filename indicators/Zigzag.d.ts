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
import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Zigzag series
 */
declare const Zigzag: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ZigzagSeries;
    type: string;
};
export interface ZigzagSeriesProps {
    type?: "zigzag";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesZigzagOptions, "type">;
}
export declare function ZigzagSeries(_props: ZigzagSeriesProps): any;
export declare namespace ZigzagSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Zigzag;
