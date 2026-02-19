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
import type { SeriesVariablePieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * VariablePie series
 */
declare const VariablePie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariablePieSeries;
    type: string;
};
export interface VariablePieSeriesProps {
    type?: "variablepie";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVariablePieOptions, "type">;
}
export declare function VariablePieSeries(_props: VariablePieSeriesProps): any;
export declare namespace VariablePieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VariablePie;
