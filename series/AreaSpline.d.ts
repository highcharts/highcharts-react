/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesAreasplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AreaSpline series
 */
declare const AreaSpline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineSeries;
    type: string;
};
type SeriesAreasplineConfig = Omit<SeriesAreasplineOptions, "type">;
export interface AreaSplineSeriesProps {
    id?: SeriesAreasplineConfig["id"];
    index?: SeriesAreasplineConfig["index"];
    name?: SeriesAreasplineConfig["name"];
    className?: SeriesAreasplineConfig["className"];
    color?: SeriesAreasplineConfig["color"];
    events?: SeriesAreasplineConfig["events"];
    data?: SeriesAreasplineConfig["data"];
    options?: SeriesAreasplineConfig;
}
export declare function AreaSplineSeries(_props: AreaSplineSeriesProps): any;
export declare namespace AreaSplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSpline;
