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
import type { SeriesAOOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AO series
 */
declare const AO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AOSeries;
    type: string;
};
interface AOSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAOOptions>;
    children?: React.ReactNode;
}
export declare function AOSeries(_props: AOSeriesProps): any;
export declare namespace AOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AO;
