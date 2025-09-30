/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesPackedBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PackedBubble series
 */
declare const PackedBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PackedBubbleSeries;
    type: string;
};
interface PackedBubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPackedBubbleOptions>;
    children?: React.ReactNode;
}
export declare function PackedBubbleSeries(_props: PackedBubbleSeriesProps): any;
export declare namespace PackedBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PackedBubble;
