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
import type { SeriesAreaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Area series
 */
declare const Area: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: AreaSeriesProps): React.JSX.Element;
    type: string;
};
interface AreaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreaOptions>;
}
export default Area;
