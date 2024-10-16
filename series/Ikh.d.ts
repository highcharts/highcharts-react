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
import type { SeriesIkhOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ikh series
 */
declare const Ikh: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: IkhSeriesProps): React.JSX.Element;
    type: string;
};
interface IkhSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesIkhOptions>;
}
export default Ikh;
