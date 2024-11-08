/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function LollipopSeries(_props: LollipopSeriesProps): any;
export declare namespace LollipopSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Lollipop;
