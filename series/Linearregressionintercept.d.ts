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
import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregressionintercept series
 */
declare const Linearregressionintercept: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: LinearregressioninterceptSeriesProps): React.JSX.Element;
    type: string;
};
interface LinearregressioninterceptSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressioninterceptOptions>;
}
export default Linearregressionintercept;
