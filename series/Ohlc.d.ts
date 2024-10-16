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
import type { SeriesOhlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ohlc series
 */
declare const Ohlc: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: OhlcSeriesProps): React.JSX.Element;
    type: string;
};
interface OhlcSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOhlcOptions>;
}
export default Ohlc;
