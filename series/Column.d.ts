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
import type { SeriesColumnOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Column series
 */
declare const Column: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnSeries;
    type: string;
};
interface ColumnSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnOptions>;
}
export declare function ColumnSeries(_props: ColumnSeriesProps): any;
export declare namespace ColumnSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Column;
