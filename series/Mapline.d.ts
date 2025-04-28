/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React from "react";
import type { SeriesMaplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mapline series
 */
declare const Mapline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MaplineSeries;
    type: string;
};
interface MaplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMaplineOptions>;
    children?: React.ReactNode;
}
export declare function MaplineSeries(_props: MaplineSeriesProps): any;
export declare namespace MaplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Mapline;
