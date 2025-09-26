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
import type { SeriesDEMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * DEMA series
 */
declare const DEMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DEMASeries;
    type: string;
};
interface DEMASeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDEMAOptions>;
    children?: React.ReactNode;
}
export declare function DEMASeries(_props: DEMASeriesProps): any;
export declare namespace DEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default DEMA;
