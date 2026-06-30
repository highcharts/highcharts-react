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
import type { SeriesVariwideOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Variwide series
 */
declare const Variwide: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariwideSeries;
    type: string;
};
type SeriesVariwideConfig = Omit<SeriesVariwideOptions, "type">;
export interface VariwideSeriesProps {
    id?: SeriesVariwideConfig["id"];
    index?: SeriesVariwideConfig["index"];
    name?: SeriesVariwideConfig["name"];
    className?: SeriesVariwideConfig["className"];
    color?: SeriesVariwideConfig["color"];
    events?: SeriesVariwideConfig["events"];
    data?: SeriesVariwideConfig["data"];
    options?: SeriesVariwideConfig;
}
export declare function VariwideSeries(_props: VariwideSeriesProps): any;
export declare namespace VariwideSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Variwide;
