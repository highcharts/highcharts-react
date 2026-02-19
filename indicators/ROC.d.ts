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
import type { SeriesROCOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ROC series
 */
declare const ROC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ROCSeries;
    type: string;
};
export interface ROCSeriesProps {
    type?: "roc";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesROCOptions, "type">;
}
export declare function ROCSeries(_props: ROCSeriesProps): any;
export declare namespace ROCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ROC;
