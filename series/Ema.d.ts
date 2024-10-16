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
import type { SeriesEmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ema series
 */
declare const Ema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: EmaSeriesProps): React.JSX.Element;
    type: string;
};
interface EmaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesEmaOptions>;
}
export default Ema;
