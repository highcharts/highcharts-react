/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesSplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Spline series
 */
declare const Spline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SplineSeries;
    type: string;
};
type SeriesSplineConfig = Omit<SeriesSplineOptions, "type">;
export interface SplineSeriesProps {
    id?: SeriesSplineConfig["id"];
    index?: SeriesSplineConfig["index"];
    name?: SeriesSplineConfig["name"];
    className?: SeriesSplineConfig["className"];
    color?: SeriesSplineConfig["color"];
    events?: SeriesSplineConfig["events"];
    data?: SeriesSplineConfig["data"];
    options?: SeriesSplineConfig;
}
export declare function SplineSeries(_props: SplineSeriesProps): any;
export declare namespace SplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Spline;
