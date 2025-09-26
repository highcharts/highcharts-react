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
import type { SeriesPointAndFigureOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PointAndFigure series
 */
declare const PointAndFigure: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PointAndFigureSeries;
    type: string;
};
interface PointAndFigureSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPointAndFigureOptions>;
    children?: React.ReactNode;
}
export declare function PointAndFigureSeries(_props: PointAndFigureSeriesProps): any;
export declare namespace PointAndFigureSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PointAndFigure;
