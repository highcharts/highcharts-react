/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesHLCOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * HLC series
 */
declare const HLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HLCSeries;
    type: string;
};
interface HLCSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHLCOptions>;
    children?: React.ReactNode;
}
export declare function HLCSeries(_props: HLCSeriesProps): any;
export declare namespace HLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default HLC;
