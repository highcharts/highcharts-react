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
import type { SeriesMapBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MapBubble series
 */
declare const MapBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapBubbleSeries;
    type: string;
};
interface MapBubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapBubbleOptions>;
    children?: React.ReactNode;
}
export declare function MapBubbleSeries(_props: MapBubbleSeriesProps): any;
export declare namespace MapBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default MapBubble;
