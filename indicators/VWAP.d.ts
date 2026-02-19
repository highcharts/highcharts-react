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
import type { SeriesVWAPOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * VWAP series
 */
declare const VWAP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VWAPSeries;
    type: string;
};
export interface VWAPSeriesProps {
    type?: "vwap";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVWAPOptions, "type">;
}
export declare function VWAPSeries(_props: VWAPSeriesProps): any;
export declare namespace VWAPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VWAP;
