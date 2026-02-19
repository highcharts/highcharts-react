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
import type { SeriesTrendLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * TrendLine series
 */
declare const TrendLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TrendLineSeries;
    type: string;
};
export interface TrendLineSeriesProps {
    type?: "trendline";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesTrendLineOptions, "type">;
}
export declare function TrendLineSeries(_props: TrendLineSeriesProps): any;
export declare namespace TrendLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TrendLine;
