/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesTrendlineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Trendline series
 */
declare const Trendline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TrendlineSeries;
    type: string;
};
interface TrendlineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTrendlineOptions>;
    children?: React.ReactNode;
}
export declare function TrendlineSeries(_props: TrendlineSeriesProps): any;
export declare namespace TrendlineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Trendline;
