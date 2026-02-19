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
import type { SeriesZoomEnabledOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ZoomEnabled series
 */
declare const ZoomEnabled: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ZoomEnabledSeries;
    type: string;
};
export interface ZoomEnabledSeriesProps {
    type?: "zoomenabled";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesZoomEnabledOptions, "type">;
}
export declare function ZoomEnabledSeries(_props: ZoomEnabledSeriesProps): any;
export declare namespace ZoomEnabledSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ZoomEnabled;
