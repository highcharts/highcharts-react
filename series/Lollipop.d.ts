/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React from "react";
import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Lollipop series
 */
declare const Lollipop: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LollipopSeries;
    type: string;
};
interface LollipopSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLollipopOptions>;
    children?: React.ReactNode;
}
export declare function LollipopSeries(_props: LollipopSeriesProps): any;
export declare namespace LollipopSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Lollipop;
