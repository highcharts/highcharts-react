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
import type { SeriesDisparityIndexOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * DisparityIndex series
 */
declare const DisparityIndex: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DisparityIndexSeries;
    type: string;
};
interface DisparityIndexSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDisparityIndexOptions>;
    children?: React.ReactNode;
}
export declare function DisparityIndexSeries(_props: DisparityIndexSeriesProps): any;
export declare namespace DisparityIndexSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default DisparityIndex;
