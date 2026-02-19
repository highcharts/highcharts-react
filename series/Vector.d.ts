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
import type { SeriesVectorOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Vector series
 */
declare const Vector: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VectorSeries;
    type: string;
};
export interface VectorSeriesProps {
    type?: "vector";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVectorOptions, "type">;
}
export declare function VectorSeries(_props: VectorSeriesProps): any;
export declare namespace VectorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Vector;
