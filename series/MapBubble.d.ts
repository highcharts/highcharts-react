/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesMapbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapBubble series
 */
declare const MapBubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapBubbleSeries;
    type: string;
};
type SeriesMapbubbleConfig = Omit<SeriesMapbubbleOptions, "type">;
export interface MapBubbleSeriesProps {
    id?: SeriesMapbubbleConfig["id"];
    index?: SeriesMapbubbleConfig["index"];
    name?: SeriesMapbubbleConfig["name"];
    className?: SeriesMapbubbleConfig["className"];
    color?: SeriesMapbubbleConfig["color"];
    events?: SeriesMapbubbleConfig["events"];
    data?: SeriesMapbubbleConfig["data"];
    options?: SeriesMapbubbleConfig;
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
