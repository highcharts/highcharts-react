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
import type { SeriesTrendLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * TrendLine series
 */
declare const TrendLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TrendLineSeries;
    type: string;
};
interface TrendLineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTrendLineOptions>;
    children?: React.ReactNode;
}
export declare function TrendLineSeries(_props: TrendLineSeriesProps): any;
export declare namespace TrendLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default TrendLine;
