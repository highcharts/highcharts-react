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
import type { SeriesPsarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * PSAR series
 */
declare const PSAR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PSARSeries;
    type: string;
};
type SeriesPsarConfig = Omit<SeriesPsarOptions, "type">;
export interface PSARSeriesProps {
    id?: SeriesPsarConfig["id"];
    index?: SeriesPsarConfig["index"];
    name?: SeriesPsarConfig["name"];
    className?: SeriesPsarConfig["className"];
    color?: SeriesPsarConfig["color"];
    events?: SeriesPsarConfig["events"];
    options?: SeriesPsarConfig;
}
export declare function PSARSeries(_props: PSARSeriesProps): any;
export declare namespace PSARSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PSAR;
