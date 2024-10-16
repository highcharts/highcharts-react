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
import type { SeriesTrixOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Trix series
 */
declare const Trix: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: TrixSeriesProps): React.JSX.Element;
    type: string;
};
interface TrixSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTrixOptions>;
}
export default Trix;
