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
import type { SeriesVariwideOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Variwide series
 */
declare const Variwide: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariwideSeries;
    type: string;
};
export interface VariwideSeriesProps {
    type?: "variwide";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVariwideOptions, "type">;
}
export declare function VariwideSeries(_props: VariwideSeriesProps): any;
export declare namespace VariwideSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Variwide;
