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
import type { SeriesAreasplinerangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Areasplinerange series
 */
declare const Areasplinerange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreasplinerangeSeries;
    type: string;
};
interface AreasplinerangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreasplinerangeOptions>;
}
export declare function AreasplinerangeSeries(_props: AreasplinerangeSeriesProps): any;
export declare namespace AreasplinerangeSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Areasplinerange;
