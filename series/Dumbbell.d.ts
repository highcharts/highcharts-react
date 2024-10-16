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
import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dumbbell series
 */
declare const Dumbbell: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: DumbbellSeriesProps): React.JSX.Element;
    type: string;
};
interface DumbbellSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDumbbellOptions>;
}
export default Dumbbell;
