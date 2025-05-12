/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React from "react";
import type { SeriesAroonoscillatorOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Aroonoscillator series
 */
declare const Aroonoscillator: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonoscillatorSeries;
    type: string;
};
interface AroonoscillatorSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAroonoscillatorOptions>;
    children?: React.ReactNode;
}
export declare function AroonoscillatorSeries(_props: AroonoscillatorSeriesProps): any;
export declare namespace AroonoscillatorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Aroonoscillator;
