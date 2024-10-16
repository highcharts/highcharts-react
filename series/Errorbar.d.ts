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
import type { SeriesErrorbarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Errorbar series
 */
declare const Errorbar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ErrorbarSeriesProps): React.JSX.Element;
    type: string;
};
interface ErrorbarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesErrorbarOptions>;
}
export default Errorbar;
