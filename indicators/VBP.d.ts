/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesVBPOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * VBP series
 */
declare const VBP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VBPSeries;
    type: string;
};
interface VBPSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVBPOptions>;
    children?: React.ReactNode;
}
export declare function VBPSeries(_props: VBPSeriesProps): any;
export declare namespace VBPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default VBP;
