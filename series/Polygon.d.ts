/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React from "react";
import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Polygon series
 */
declare const Polygon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PolygonSeries;
    type: string;
};
interface PolygonSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPolygonOptions>;
    children?: React.ReactNode;
}
export declare function PolygonSeries(_props: PolygonSeriesProps): any;
export declare namespace PolygonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Polygon;
