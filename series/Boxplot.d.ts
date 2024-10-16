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
import type { SeriesBoxplotOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Boxplot series
 */
declare const Boxplot: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: BoxplotSeriesProps): React.JSX.Element;
    type: string;
};
interface BoxplotSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBoxplotOptions>;
}
export default Boxplot;
