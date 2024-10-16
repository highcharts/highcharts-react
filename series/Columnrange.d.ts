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
import type { SeriesColumnrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Columnrange series
 */
declare const Columnrange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ColumnrangeSeriesProps): React.JSX.Element;
    type: string;
};
interface ColumnrangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnrangeOptions>;
}
export default Columnrange;
