/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesAreasplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Areaspline series
 */
declare const Areaspline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreasplineSeries;
    type: string;
};
interface AreasplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreasplineOptions>;
}
export declare function AreasplineSeries(_props: AreasplineSeriesProps): any;
export declare namespace AreasplineSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Areaspline;
