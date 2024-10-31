/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React from "react";
import type { SeriesVectorOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Vector series
 */
declare const Vector: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VectorSeries;
    type: string;
};
interface VectorSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVectorOptions>;
}
export declare function VectorSeries(_props: VectorSeriesProps): any;
export declare namespace VectorSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Vector;
