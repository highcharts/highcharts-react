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
import type { SeriesADOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AD series
 */
declare const AD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ADSeries;
    type: string;
};
export interface ADSeriesProps {
    type?: "ad";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesADOptions, "type">;
}
export declare function ADSeries(_props: ADSeriesProps): any;
export declare namespace ADSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AD;
