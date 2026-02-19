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
import type { SeriesAroonOscillatorOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AroonOscillator series
 */
declare const AroonOscillator: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonOscillatorSeries;
    type: string;
};
export interface AroonOscillatorSeriesProps {
    type?: "aroonoscillator";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAroonOscillatorOptions, "type">;
}
export declare function AroonOscillatorSeries(_props: AroonOscillatorSeriesProps): any;
export declare namespace AroonOscillatorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AroonOscillator;
