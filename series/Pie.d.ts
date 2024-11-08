/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesPieOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pie series
 */
declare const Pie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PieSeries;
    type: string;
};
interface PieSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPieOptions>;
}
export declare function PieSeries(_props: PieSeriesProps): any;
export declare namespace PieSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Pie;
