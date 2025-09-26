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
import type { SeriesNATROptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * NATR series
 */
declare const NATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NATRSeries;
    type: string;
};
interface NATRSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesNATROptions>;
    children?: React.ReactNode;
}
export declare function NATRSeries(_props: NATRSeriesProps): any;
export declare namespace NATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default NATR;
