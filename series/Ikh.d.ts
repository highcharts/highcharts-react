/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React from "react";
import type { SeriesIkhOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ikh series
 */
declare const Ikh: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof IkhSeries;
    type: string;
};
interface IkhSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesIkhOptions>;
    children?: React.ReactNode;
}
export declare function IkhSeries(_props: IkhSeriesProps): any;
export declare namespace IkhSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Ikh;
