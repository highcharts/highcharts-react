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
import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Linearregressionslope series
 */
declare const Linearregressionslope: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressionslopeSeries;
    type: string;
};
type SeriesLinearregressionslopeConfig = Omit<SeriesLinearregressionslopeOptions, "type">;
export interface LinearregressionslopeSeriesProps {
    id?: SeriesLinearregressionslopeConfig["id"];
    index?: SeriesLinearregressionslopeConfig["index"];
    name?: SeriesLinearregressionslopeConfig["name"];
    className?: SeriesLinearregressionslopeConfig["className"];
    color?: SeriesLinearregressionslopeConfig["color"];
    events?: SeriesLinearregressionslopeConfig["events"];
    options?: SeriesLinearregressionslopeConfig;
}
export declare function LinearregressionslopeSeries(_props: LinearregressionslopeSeriesProps): any;
export declare namespace LinearregressionslopeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Linearregressionslope;
