/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-24
 *
 */
import React from "react";
import type { SeriesAroonOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Aroon series
 */
declare const Aroon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonSeries;
    type: string;
};
interface AroonSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAroonOptions>;
    children?: React.ReactNode;
}
export declare function AroonSeries(_props: AroonSeriesProps): any;
export declare namespace AroonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Aroon;
