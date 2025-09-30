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
import type { SeriesPCOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PC series
 */
declare const PC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PCSeries;
    type: string;
};
interface PCSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPCOptions>;
    children?: React.ReactNode;
}
export declare function PCSeries(_props: PCSeriesProps): any;
export declare namespace PCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PC;
