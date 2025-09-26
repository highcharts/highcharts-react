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
import type { SeriesABandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ABands series
 */
declare const ABands: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ABandsSeries;
    type: string;
};
interface ABandsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesABandsOptions>;
    children?: React.ReactNode;
}
export declare function ABandsSeries(_props: ABandsSeriesProps): any;
export declare namespace ABandsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ABands;
