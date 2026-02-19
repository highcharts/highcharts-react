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
import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Dumbbell series
 */
declare const Dumbbell: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DumbbellSeries;
    type: string;
};
export interface DumbbellSeriesProps {
    type?: "dumbbell";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDumbbellOptions, "type">;
}
export declare function DumbbellSeries(_props: DumbbellSeriesProps): any;
export declare namespace DumbbellSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Dumbbell;
