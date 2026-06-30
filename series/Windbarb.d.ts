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
import type { SeriesWindbarbOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Windbarb series
 */
declare const Windbarb: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WindbarbSeries;
    type: string;
};
type SeriesWindbarbConfig = Omit<SeriesWindbarbOptions, "type">;
export interface WindbarbSeriesProps {
    id?: SeriesWindbarbConfig["id"];
    index?: SeriesWindbarbConfig["index"];
    name?: SeriesWindbarbConfig["name"];
    className?: SeriesWindbarbConfig["className"];
    color?: SeriesWindbarbConfig["color"];
    events?: SeriesWindbarbConfig["events"];
    data?: SeriesWindbarbConfig["data"];
    options?: SeriesWindbarbConfig;
}
export declare function WindbarbSeries(_props: WindbarbSeriesProps): any;
export declare namespace WindbarbSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Windbarb;
