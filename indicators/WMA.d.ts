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
import type { SeriesWmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * WMA series
 */
declare const WMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WMASeries;
    type: string;
};
type SeriesWmaConfig = Omit<SeriesWmaOptions, "type">;
export interface WMASeriesProps {
    id?: SeriesWmaConfig["id"];
    index?: SeriesWmaConfig["index"];
    name?: SeriesWmaConfig["name"];
    className?: SeriesWmaConfig["className"];
    color?: SeriesWmaConfig["color"];
    events?: SeriesWmaConfig["events"];
    options?: SeriesWmaConfig;
}
export declare function WMASeries(_props: WMASeriesProps): any;
export declare namespace WMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WMA;
