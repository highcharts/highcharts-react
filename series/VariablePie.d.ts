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
import type { SeriesVariablepieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * VariablePie series
 */
declare const VariablePie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariablePieSeries;
    type: string;
};
type SeriesVariablepieConfig = Omit<SeriesVariablepieOptions, "type">;
export interface VariablePieSeriesProps {
    id?: SeriesVariablepieConfig["id"];
    index?: SeriesVariablepieConfig["index"];
    name?: SeriesVariablepieConfig["name"];
    className?: SeriesVariablepieConfig["className"];
    color?: SeriesVariablepieConfig["color"];
    events?: SeriesVariablepieConfig["events"];
    data?: SeriesVariablepieConfig["data"];
    options?: SeriesVariablepieConfig;
}
export declare function VariablePieSeries(_props: VariablePieSeriesProps): any;
export declare namespace VariablePieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VariablePie;
