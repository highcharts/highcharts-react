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
import type { SeriesEMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * EMA series
 */
declare const EMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof EMASeries;
    type: string;
};
interface EMASeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesEMAOptions>;
    children?: React.ReactNode;
}
export declare function EMASeries(_props: EMASeriesProps): any;
export declare namespace EMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default EMA;
