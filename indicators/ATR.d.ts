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
import type { SeriesAtrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * ATR series
 */
declare const ATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ATRSeries;
    type: string;
};
type SeriesAtrConfig = Omit<SeriesAtrOptions, "type">;
export interface ATRSeriesProps {
    id?: SeriesAtrConfig["id"];
    index?: SeriesAtrConfig["index"];
    name?: SeriesAtrConfig["name"];
    className?: SeriesAtrConfig["className"];
    color?: SeriesAtrConfig["color"];
    events?: SeriesAtrConfig["events"];
    options?: SeriesAtrConfig;
}
export declare function ATRSeries(_props: ATRSeriesProps): any;
export declare namespace ATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ATR;
