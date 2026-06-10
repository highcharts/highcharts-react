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
import type { SeriesChaikinOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Chaikin series
 */
declare const Chaikin: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ChaikinSeries;
    type: string;
};
type SeriesChaikinConfig = Omit<SeriesChaikinOptions, "type">;
export interface ChaikinSeriesProps {
    id?: SeriesChaikinConfig["id"];
    index?: SeriesChaikinConfig["index"];
    name?: SeriesChaikinConfig["name"];
    className?: SeriesChaikinConfig["className"];
    color?: SeriesChaikinConfig["color"];
    events?: SeriesChaikinConfig["events"];
    options?: SeriesChaikinConfig;
}
export declare function ChaikinSeries(_props: ChaikinSeriesProps): any;
export declare namespace ChaikinSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Chaikin;
