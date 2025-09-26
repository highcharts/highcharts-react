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
import type { SeriesTEMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * TEMA series
 */
declare const TEMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TEMASeries;
    type: string;
};
interface TEMASeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTEMAOptions>;
    children?: React.ReactNode;
}
export declare function TEMASeries(_props: TEMASeriesProps): any;
export declare namespace TEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default TEMA;
