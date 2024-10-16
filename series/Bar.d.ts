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
import type { SeriesBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bar series
 */
declare const Bar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: BarSeriesProps): React.JSX.Element;
    type: string;
};
interface BarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBarOptions>;
}
export default Bar;
