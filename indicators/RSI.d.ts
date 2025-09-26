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
import type { SeriesRSIOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * RSI series
 */
declare const RSI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RSISeries;
    type: string;
};
interface RSISeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesRSIOptions>;
    children?: React.ReactNode;
}
export declare function RSISeries(_props: RSISeriesProps): any;
export declare namespace RSISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default RSI;
