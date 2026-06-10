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
import type { SeriesRsiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * RSI series
 */
declare const RSI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RSISeries;
    type: string;
};
type SeriesRsiConfig = Omit<SeriesRsiOptions, "type">;
export interface RSISeriesProps {
    id?: SeriesRsiConfig["id"];
    index?: SeriesRsiConfig["index"];
    name?: SeriesRsiConfig["name"];
    className?: SeriesRsiConfig["className"];
    color?: SeriesRsiConfig["color"];
    events?: SeriesRsiConfig["events"];
    options?: SeriesRsiConfig;
}
export declare function RSISeries(_props: RSISeriesProps): any;
export declare namespace RSISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default RSI;
