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
import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Arearange series
 */
declare const Arearange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ArearangeSeriesProps): React.JSX.Element;
    type: string;
};
interface ArearangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesArearangeOptions>;
}
export default Arearange;
