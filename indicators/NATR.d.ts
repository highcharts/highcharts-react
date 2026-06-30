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
import type { SeriesNatrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * NATR series
 */
declare const NATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NATRSeries;
    type: string;
};
type SeriesNatrConfig = Omit<SeriesNatrOptions, "type">;
export interface NATRSeriesProps {
    id?: SeriesNatrConfig["id"];
    index?: SeriesNatrConfig["index"];
    name?: SeriesNatrConfig["name"];
    className?: SeriesNatrConfig["className"];
    color?: SeriesNatrConfig["color"];
    events?: SeriesNatrConfig["events"];
    options?: SeriesNatrConfig;
}
export declare function NATRSeries(_props: NATRSeriesProps): any;
export declare namespace NATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default NATR;
