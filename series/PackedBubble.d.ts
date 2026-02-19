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
import type { SeriesPackedBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PackedBubble series
 */
declare const PackedBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PackedBubbleSeries;
    type: string;
};
export interface PackedBubbleSeriesProps {
    type?: "packedbubble";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPackedBubbleOptions, "type">;
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
