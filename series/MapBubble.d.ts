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
import type { SeriesMapBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapBubble series
 */
declare const MapBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapBubbleSeries;
    type: string;
};
export interface MapBubbleSeriesProps {
    type?: "mapbubble";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMapBubbleOptions, "type">;
}
export declare function MapBubbleSeries(_props: MapBubbleSeriesProps): any;
export declare namespace MapBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapBubble;
