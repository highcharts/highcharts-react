/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesAoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * AO series
 */
declare const AO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AOSeries;
    type: string;
};
type SeriesAoConfig = Omit<SeriesAoOptions, "type">;
export interface AOSeriesProps {
    id?: SeriesAoConfig["id"];
    index?: SeriesAoConfig["index"];
    name?: SeriesAoConfig["name"];
    className?: SeriesAoConfig["className"];
    color?: SeriesAoConfig["color"];
    events?: SeriesAoConfig["events"];
    options?: SeriesAoConfig;
}
export declare function AOSeries(_props: AOSeriesProps): any;
export declare namespace AOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AO;
