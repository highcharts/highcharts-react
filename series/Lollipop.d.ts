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
import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Lollipop series
 */
declare const Lollipop: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LollipopSeries;
    type: string;
};
export interface LollipopSeriesProps {
    type?: "lollipop";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesLollipopOptions, "type">;
}
export declare function LollipopSeries(_props: LollipopSeriesProps): any;
export declare namespace LollipopSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Lollipop;
