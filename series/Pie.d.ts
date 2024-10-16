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
import type { SeriesPieOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pie series
 */
declare const Pie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PieSeriesProps): React.JSX.Element;
    type: string;
};
interface PieSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPieOptions>;
}
export default Pie;
