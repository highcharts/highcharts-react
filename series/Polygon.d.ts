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
import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Polygon series
 */
declare const Polygon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PolygonSeries;
    type: string;
};
export interface PolygonSeriesProps {
    type?: "polygon";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPolygonOptions, "type">;
}
export declare function PolygonSeries(_props: PolygonSeriesProps): any;
export declare namespace PolygonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Polygon;
