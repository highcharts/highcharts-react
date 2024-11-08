/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesVariablepieOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Variablepie series
 */
declare const Variablepie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariablepieSeries;
    type: string;
};
interface VariablepieSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVariablepieOptions>;
}
export declare function VariablepieSeries(_props: VariablepieSeriesProps): any;
export declare namespace VariablepieSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Variablepie;
