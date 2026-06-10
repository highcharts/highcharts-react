/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesPointandfigureOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * PointAndFigure series
 */
declare const PointAndFigure: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PointAndFigureSeries;
    type: string;
};
type SeriesPointandfigureConfig = Omit<SeriesPointandfigureOptions, "type">;
export interface PointAndFigureSeriesProps {
    id?: SeriesPointandfigureConfig["id"];
    index?: SeriesPointandfigureConfig["index"];
    name?: SeriesPointandfigureConfig["name"];
    className?: SeriesPointandfigureConfig["className"];
    color?: SeriesPointandfigureConfig["color"];
    events?: SeriesPointandfigureConfig["events"];
    data?: SeriesPointandfigureConfig["data"];
    options?: SeriesPointandfigureConfig;
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
