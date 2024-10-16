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
import type { SeriesAreasplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Areaspline series
 */
declare const Areaspline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: AreasplineSeriesProps): React.JSX.Element;
    type: string;
};
interface AreasplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreasplineOptions>;
}
export default Areaspline;
