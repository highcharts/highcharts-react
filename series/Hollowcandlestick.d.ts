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
import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Hollowcandlestick series
 */
declare const Hollowcandlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: HollowcandlestickSeriesProps): React.JSX.Element;
    type: string;
};
interface HollowcandlestickSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHollowcandlestickOptions>;
}
export default Hollowcandlestick;
