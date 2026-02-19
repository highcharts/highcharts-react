/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesPointAndFigureOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PointAndFigure series
 */
declare const PointAndFigure: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PointAndFigureSeries;
    type: string;
};
export interface PointAndFigureSeriesProps {
    type?: "pointandfigure";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPointAndFigureOptions, "type">;
}
export declare function PointAndFigureSeries(_props: PointAndFigureSeriesProps): any;
export declare namespace PointAndFigureSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PointAndFigure;
