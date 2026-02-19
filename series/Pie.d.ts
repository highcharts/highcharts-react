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
import type { SeriesPieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pie series
 */
declare const Pie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PieSeries;
    type: string;
};
export interface PieSeriesProps {
    type?: "pie";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPieOptions, "type">;
}
export declare function PieSeries(_props: PieSeriesProps): any;
export declare namespace PieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pie;
