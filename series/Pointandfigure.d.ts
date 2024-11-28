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
import type { SeriesPointandfigureOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pointandfigure series
 */
declare const Pointandfigure: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PointandfigureSeries;
    type: string;
};
interface PointandfigureSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPointandfigureOptions>;
    children?: React.ReactNode;
}
export declare function PointandfigureSeries(_props: PointandfigureSeriesProps): any;
export declare namespace PointandfigureSeries {
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
export default Pointandfigure;
