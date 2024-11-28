/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesWmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Wma series
 */
declare const Wma: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WmaSeries;
    type: string;
};
interface WmaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWmaOptions>;
    children?: React.ReactNode;
}
export declare function WmaSeries(_props: WmaSeriesProps): any;
export declare namespace WmaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Wma;
