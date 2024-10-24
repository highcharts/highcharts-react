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
}
export declare function MapbubbleSeries(_props: MapbubbleSeriesProps): any;
export declare namespace MapbubbleSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Mapbubble;
