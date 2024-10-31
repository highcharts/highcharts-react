/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function AroonoscillatorSeries(_props: AroonoscillatorSeriesProps): any;
export declare namespace AroonoscillatorSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Aroonoscillator;
