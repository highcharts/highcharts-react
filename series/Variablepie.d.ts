/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesVariablePieOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * VariablePie series
 */
declare const VariablePie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariablePieSeries;
    type: string;
};
interface VariablePieSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVariablePieOptions>;
    children?: React.ReactNode;
}
export declare function VariablePieSeries(_props: VariablePieSeriesProps): any;
export declare namespace VariablePieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default VariablePie;
