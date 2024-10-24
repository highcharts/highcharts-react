/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bubble series
 */
declare const Bubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BubbleSeries;
    type: string;
};
interface BubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBubbleOptions>;
}
export declare function BubbleSeries(_props: BubbleSeriesProps): any;
export declare namespace BubbleSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Bubble;
