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
import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregressionslope series
 */
declare const Linearregressionslope: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: LinearregressionslopeSeriesProps): React.JSX.Element;
    type: string;
};
interface LinearregressionslopeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressionslopeOptions>;
}
export default Linearregressionslope;
