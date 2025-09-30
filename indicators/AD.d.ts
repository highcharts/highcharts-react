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
import type { SeriesADOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AD series
 */
declare const AD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ADSeries;
    type: string;
};
interface ADSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesADOptions>;
    children?: React.ReactNode;
}
export declare function ADSeries(_props: ADSeriesProps): any;
export declare namespace ADSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AD;
