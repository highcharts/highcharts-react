/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dumbbell series
 */
declare const Dumbbell: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DumbbellSeries;
    type: string;
};
interface DumbbellSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDumbbellOptions>;
}
export declare function DumbbellSeries(_props: DumbbellSeriesProps): any;
export declare namespace DumbbellSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Dumbbell;
