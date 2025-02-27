/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-27
 *
 */
import React from "react";
import type { SeriesMapbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mapbubble series
 */
declare const Mapbubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapbubbleSeries;
    type: string;
};
interface MapbubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapbubbleOptions>;
    children?: React.ReactNode;
}
export declare function MapbubbleSeries(_props: MapbubbleSeriesProps): any;
export declare namespace MapbubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Mapbubble;
