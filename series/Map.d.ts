/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Map series
 */
declare const Map: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapSeries;
    type: string;
};
interface MapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapOptions>;
    children?: React.ReactNode;
}
export declare function MapSeries(_props: MapSeriesProps): any;
export declare namespace MapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Map;
