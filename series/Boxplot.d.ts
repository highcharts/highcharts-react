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
import type { SeriesBoxplotOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Boxplot series
 */
declare const Boxplot: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BoxplotSeries;
    type: string;
};
interface BoxplotSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBoxplotOptions>;
    children?: React.ReactNode;
}
export declare function BoxplotSeries(_props: BoxplotSeriesProps): any;
export declare namespace BoxplotSeries {
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
export default Boxplot;
