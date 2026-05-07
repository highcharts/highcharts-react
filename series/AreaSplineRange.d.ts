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
import type { SeriesAreasplinerangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * AreaSplineRange series
 */
declare const AreaSplineRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineRangeSeries;
    type: string;
};
type SeriesAreasplinerangeConfig = Omit<SeriesAreasplinerangeOptions, "type">;
export interface AreaSplineRangeSeriesProps {
    id?: SeriesAreasplinerangeConfig["id"];
    index?: SeriesAreasplinerangeConfig["index"];
    name?: SeriesAreasplinerangeConfig["name"];
    className?: SeriesAreasplinerangeConfig["className"];
    color?: SeriesAreasplinerangeConfig["color"];
    events?: SeriesAreasplinerangeConfig["events"];
    data?: SeriesAreasplinerangeConfig["data"];
    options?: SeriesAreasplinerangeConfig;
}
export declare function AreaSplineRangeSeries(_props: AreaSplineRangeSeriesProps): any;
export declare namespace AreaSplineRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSplineRange;
