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
import type { SeriesApoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * APO series
 */
declare const APO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof APOSeries;
    type: string;
};
type SeriesApoConfig = Omit<SeriesApoOptions, "type">;
export interface APOSeriesProps {
    id?: SeriesApoConfig["id"];
    index?: SeriesApoConfig["index"];
    name?: SeriesApoConfig["name"];
    className?: SeriesApoConfig["className"];
    color?: SeriesApoConfig["color"];
    events?: SeriesApoConfig["events"];
    options?: SeriesApoConfig;
}
export declare function APOSeries(_props: APOSeriesProps): any;
export declare namespace APOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default APO;
