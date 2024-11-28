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
import type { SeriesObvOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Obv series
 */
declare const Obv: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ObvSeries;
    type: string;
};
interface ObvSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesObvOptions>;
    children?: React.ReactNode;
}
export declare function ObvSeries(_props: ObvSeriesProps): any;
export declare namespace ObvSeries {
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
export default Obv;
