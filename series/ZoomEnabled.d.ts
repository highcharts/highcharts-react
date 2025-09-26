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
import type { SeriesZoomEnabledOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ZoomEnabled series
 */
declare const ZoomEnabled: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ZoomEnabledSeries;
    type: string;
};
interface ZoomEnabledSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesZoomEnabledOptions>;
    children?: React.ReactNode;
}
export declare function ZoomEnabledSeries(_props: ZoomEnabledSeriesProps): any;
export declare namespace ZoomEnabledSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ZoomEnabled;
