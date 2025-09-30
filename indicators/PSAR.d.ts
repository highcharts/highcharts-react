/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesPSAROptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PSAR series
 */
declare const PSAR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PSARSeries;
    type: string;
};
interface PSARSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPSAROptions>;
    children?: React.ReactNode;
}
export declare function PSARSeries(_props: PSARSeriesProps): any;
export declare namespace PSARSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PSAR;
