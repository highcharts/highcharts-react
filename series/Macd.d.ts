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
import type { SeriesMacdOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Macd series
 */
declare const Macd: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MacdSeriesProps): React.JSX.Element;
    type: string;
};
interface MacdSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMacdOptions>;
}
export default Macd;
