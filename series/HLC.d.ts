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
import type { SeriesHlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * HLC series
 */
declare const HLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HLCSeries;
    type: string;
};
type SeriesHlcConfig = Omit<SeriesHlcOptions, "type">;
export interface HLCSeriesProps {
    id?: SeriesHlcConfig["id"];
    index?: SeriesHlcConfig["index"];
    name?: SeriesHlcConfig["name"];
    className?: SeriesHlcConfig["className"];
    color?: SeriesHlcConfig["color"];
    events?: SeriesHlcConfig["events"];
    data?: SeriesHlcConfig["data"];
    options?: SeriesHlcConfig;
}
export declare function HLCSeries(_props: HLCSeriesProps): any;
export declare namespace HLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HLC;
