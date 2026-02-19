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
import type { SeriesChaikinOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Chaikin series
 */
declare const Chaikin: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ChaikinSeries;
    type: string;
};
export interface ChaikinSeriesProps {
    type?: "chaikin";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesChaikinOptions, "type">;
}
export declare function ChaikinSeries(_props: ChaikinSeriesProps): any;
export declare namespace ChaikinSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Chaikin;
