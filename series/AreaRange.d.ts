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
import type { SeriesAreaRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AreaRange series
 */
declare const AreaRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaRangeSeries;
    type: string;
};
export interface AreaRangeSeriesProps {
    type?: "arearange";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAreaRangeOptions, "type">;
}
export declare function AreaRangeSeries(_props: AreaRangeSeriesProps): any;
export declare namespace AreaRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaRange;
