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
import type { SeriesROCOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ROC series
 */
declare const ROC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ROCSeries;
    type: string;
};
interface ROCSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesROCOptions>;
    children?: React.ReactNode;
}
export declare function ROCSeries(_props: ROCSeriesProps): any;
export declare namespace ROCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ROC;
