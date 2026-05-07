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
import type { SeriesBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Bubble series
 */
declare const Bubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BubbleSeries;
    type: string;
};
type SeriesBubbleConfig = Omit<SeriesBubbleOptions, "type">;
export interface BubbleSeriesProps {
    id?: SeriesBubbleConfig["id"];
    index?: SeriesBubbleConfig["index"];
    name?: SeriesBubbleConfig["name"];
    className?: SeriesBubbleConfig["className"];
    color?: SeriesBubbleConfig["color"];
    events?: SeriesBubbleConfig["events"];
    data?: SeriesBubbleConfig["data"];
    options?: SeriesBubbleConfig;
}
export declare function BubbleSeries(_props: BubbleSeriesProps): any;
export declare namespace BubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bubble;
