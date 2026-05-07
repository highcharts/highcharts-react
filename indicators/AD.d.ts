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
import type { SeriesAdOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * AD series
 */
declare const AD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ADSeries;
    type: string;
};
type SeriesAdConfig = Omit<SeriesAdOptions, "type">;
export interface ADSeriesProps {
    id?: SeriesAdConfig["id"];
    index?: SeriesAdConfig["index"];
    name?: SeriesAdConfig["name"];
    className?: SeriesAdConfig["className"];
    color?: SeriesAdConfig["color"];
    events?: SeriesAdConfig["events"];
    options?: SeriesAdConfig;
}
export declare function ADSeries(_props: ADSeriesProps): any;
export declare namespace ADSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AD;
