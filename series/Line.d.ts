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
import type { SeriesLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Line series
 */
declare const Line: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LineSeries;
    type: string;
};
export interface LineSeriesProps {
    type?: "line";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesLineOptions, "type">;
}
export declare function LineSeries(_props: LineSeriesProps): any;
export declare namespace LineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Line;
