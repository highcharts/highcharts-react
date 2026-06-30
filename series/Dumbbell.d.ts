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
import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Dumbbell series
 */
declare const Dumbbell: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DumbbellSeries;
    type: string;
};
type SeriesDumbbellConfig = Omit<SeriesDumbbellOptions, "type">;
export interface DumbbellSeriesProps {
    id?: SeriesDumbbellConfig["id"];
    index?: SeriesDumbbellConfig["index"];
    name?: SeriesDumbbellConfig["name"];
    className?: SeriesDumbbellConfig["className"];
    color?: SeriesDumbbellConfig["color"];
    events?: SeriesDumbbellConfig["events"];
    data?: SeriesDumbbellConfig["data"];
    options?: SeriesDumbbellConfig;
}
export declare function DumbbellSeries(_props: DumbbellSeriesProps): any;
export declare namespace DumbbellSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Dumbbell;
