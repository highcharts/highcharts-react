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
import type { SeriesBBOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * BB series
 */
declare const BB: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BBSeries;
    type: string;
};
interface BBSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBBOptions>;
    children?: React.ReactNode;
}
export declare function BBSeries(_props: BBSeriesProps): any;
export declare namespace BBSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default BB;
