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
import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Zigzag series
 */
declare const Zigzag: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ZigzagSeries;
    type: string;
};
type SeriesZigzagConfig = Omit<SeriesZigzagOptions, "type">;
export interface ZigzagSeriesProps {
    id?: SeriesZigzagConfig["id"];
    index?: SeriesZigzagConfig["index"];
    name?: SeriesZigzagConfig["name"];
    className?: SeriesZigzagConfig["className"];
    color?: SeriesZigzagConfig["color"];
    events?: SeriesZigzagConfig["events"];
    options?: SeriesZigzagConfig;
}
export declare function ZigzagSeries(_props: ZigzagSeriesProps): any;
export declare namespace ZigzagSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Zigzag;
