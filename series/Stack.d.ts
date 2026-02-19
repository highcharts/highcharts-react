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
import type { SeriesStackOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Stack series
 */
declare const Stack: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StackSeries;
    type: string;
};
export interface StackSeriesProps {
    type?: "stack";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesStackOptions, "type">;
}
export declare function StackSeries(_props: StackSeriesProps): any;
export declare namespace StackSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Stack;
