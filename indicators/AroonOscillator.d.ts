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
import type { SeriesAroonOscillatorOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AroonOscillator series
 */
declare const AroonOscillator: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonOscillatorSeries;
    type: string;
};
interface AroonOscillatorSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAroonOscillatorOptions>;
    children?: React.ReactNode;
}
export declare function AroonOscillatorSeries(_props: AroonOscillatorSeriesProps): any;
export declare namespace AroonOscillatorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AroonOscillator;
