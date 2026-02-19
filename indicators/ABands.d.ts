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
import type { SeriesABandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ABands series
 */
declare const ABands: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ABandsSeries;
    type: string;
};
export interface ABandsSeriesProps {
    type?: "abands";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesABandsOptions, "type">;
}
export declare function ABandsSeries(_props: ABandsSeriesProps): any;
export declare namespace ABandsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ABands;
