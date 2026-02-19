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
import type { SeriesHLCOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * HLC series
 */
declare const HLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HLCSeries;
    type: string;
};
export interface HLCSeriesProps {
    type?: "hlc";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesHLCOptions, "type">;
}
export declare function HLCSeries(_props: HLCSeriesProps): any;
export declare namespace HLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HLC;
