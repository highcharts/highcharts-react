/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React from "react";
import type { SeriesVariwideOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Variwide series
 */
declare const Variwide: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VariwideSeries;
    type: string;
};
interface VariwideSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVariwideOptions>;
    children?: React.ReactNode;
}
export declare function VariwideSeries(_props: VariwideSeriesProps): any;
export declare namespace VariwideSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Variwide;
