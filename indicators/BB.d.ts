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
import type { SeriesBBOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * BB series
 */
declare const BB: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BBSeries;
    type: string;
};
export interface BBSeriesProps {
    type?: "bb";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesBBOptions, "type">;
}
export declare function BBSeries(_props: BBSeriesProps): any;
export declare namespace BBSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BB;
