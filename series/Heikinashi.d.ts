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
import type { SeriesHeikinashiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Heikinashi series
 */
declare const Heikinashi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: HeikinashiSeriesProps): React.JSX.Element;
    type: string;
};
interface HeikinashiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHeikinashiOptions>;
}
export default Heikinashi;
