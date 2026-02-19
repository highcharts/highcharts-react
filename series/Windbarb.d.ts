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
import type { SeriesWindbarbOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Windbarb series
 */
declare const Windbarb: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WindbarbSeries;
    type: string;
};
export interface WindbarbSeriesProps {
    type?: "windbarb";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesWindbarbOptions, "type">;
}
export declare function WindbarbSeries(_props: WindbarbSeriesProps): any;
export declare namespace WindbarbSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Windbarb;
