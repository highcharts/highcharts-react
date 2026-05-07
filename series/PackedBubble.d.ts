/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesPackedbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * PackedBubble series
 */
declare const PackedBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PackedBubbleSeries;
    type: string;
};
type SeriesPackedbubbleConfig = Omit<SeriesPackedbubbleOptions, "type">;
export interface PackedBubbleSeriesProps {
    id?: SeriesPackedbubbleConfig["id"];
    index?: SeriesPackedbubbleConfig["index"];
    name?: SeriesPackedbubbleConfig["name"];
    className?: SeriesPackedbubbleConfig["className"];
    color?: SeriesPackedbubbleConfig["color"];
    events?: SeriesPackedbubbleConfig["events"];
    data?: SeriesPackedbubbleConfig["data"];
    options?: SeriesPackedbubbleConfig;
}
export declare function PackedBubbleSeries(_props: PackedBubbleSeriesProps): any;
export declare namespace PackedBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PackedBubble;
