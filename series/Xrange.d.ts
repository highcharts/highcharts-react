/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React from "react";
import type { SeriesXrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Xrange series
 */
declare const Xrange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: XrangeSeriesProps): React.JSX.Element;
    type: string;
};
interface XrangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesXrangeOptions>;
}
export default Xrange;
