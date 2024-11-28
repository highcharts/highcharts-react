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
    children?: React.ReactNode;
}
export declare function ColumnSeries(_props: ColumnSeriesProps): any;
export declare namespace ColumnSeries {
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
export default Column;
