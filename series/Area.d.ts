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
import type { SeriesAreaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Area series
 */
declare const Area: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSeries;
    type: string;
};
export interface AreaSeriesProps {
    type?: "area";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAreaOptions, "type">;
}
export declare function AreaSeries(_props: AreaSeriesProps): any;
export declare namespace AreaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Area;
