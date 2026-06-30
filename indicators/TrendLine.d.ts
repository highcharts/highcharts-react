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
import type { SeriesTrendlineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * TrendLine series
 */
declare const TrendLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TrendLineSeries;
    type: string;
};
type SeriesTrendlineConfig = Omit<SeriesTrendlineOptions, "type">;
export interface TrendLineSeriesProps {
    id?: SeriesTrendlineConfig["id"];
    index?: SeriesTrendlineConfig["index"];
    name?: SeriesTrendlineConfig["name"];
    className?: SeriesTrendlineConfig["className"];
    color?: SeriesTrendlineConfig["color"];
    events?: SeriesTrendlineConfig["events"];
    options?: SeriesTrendlineConfig;
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
