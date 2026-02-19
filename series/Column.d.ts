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
import type { SeriesColumnOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Column series
 */
declare const Column: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnSeries;
    type: string;
};
export interface ColumnSeriesProps {
    type?: "column";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesColumnOptions, "type">;
}
export declare function ColumnSeries(_props: ColumnSeriesProps): any;
export declare namespace ColumnSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Column;
