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
import type { SeriesVwapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Vwap series
 */
declare const Vwap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VwapSeries;
    type: string;
};
interface VwapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVwapOptions>;
    children?: React.ReactNode;
}
export declare function VwapSeries(_props: VwapSeriesProps): any;
export declare namespace VwapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Vwap;
