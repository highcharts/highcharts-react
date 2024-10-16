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
import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Lollipop series
 */
declare const Lollipop: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: LollipopSeriesProps): React.JSX.Element;
    type: string;
};
interface LollipopSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLollipopOptions>;
}
export default Lollipop;
