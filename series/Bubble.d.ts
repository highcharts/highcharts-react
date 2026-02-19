/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
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
export interface BubbleSeriesProps {
    type?: "bubble";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesBubbleOptions, "type">;
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
