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
import type { SeriesAoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ao series
 */
declare const Ao: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: AoSeriesProps): React.JSX.Element;
    type: string;
};
interface AoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAoOptions>;
}
export default Ao;
