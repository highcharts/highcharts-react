/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-27
 *
 */
import React from "react";
import type { SeriesTrixOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Trix series
 */
declare const Trix: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TrixSeries;
    type: string;
};
interface TrixSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTrixOptions>;
    children?: React.ReactNode;
}
export declare function TrixSeries(_props: TrixSeriesProps): any;
export declare namespace TrixSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Trix;
