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
type SeriesVectorConfig = Omit<SeriesVectorOptions, "type">;
export interface VectorSeriesProps {
    id?: SeriesVectorConfig["id"];
    index?: SeriesVectorConfig["index"];
    name?: SeriesVectorConfig["name"];
    className?: SeriesVectorConfig["className"];
    color?: SeriesVectorConfig["color"];
    events?: SeriesVectorConfig["events"];
    data?: SeriesVectorConfig["data"];
    options?: SeriesVectorConfig;
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
