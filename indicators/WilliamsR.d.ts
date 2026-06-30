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
import type { SeriesWilliamsrOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * WilliamsR series
 */
declare const WilliamsR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WilliamsRSeries;
    type: string;
};
type SeriesWilliamsrConfig = Omit<SeriesWilliamsrOptions, "type">;
export interface WilliamsRSeriesProps {
    id?: SeriesWilliamsrConfig["id"];
    index?: SeriesWilliamsrConfig["index"];
    name?: SeriesWilliamsrConfig["name"];
    className?: SeriesWilliamsrConfig["className"];
    color?: SeriesWilliamsrConfig["color"];
    events?: SeriesWilliamsrConfig["events"];
    options?: SeriesWilliamsrConfig;
}
export declare function WilliamsRSeries(_props: WilliamsRSeriesProps): any;
export declare namespace WilliamsRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WilliamsR;
