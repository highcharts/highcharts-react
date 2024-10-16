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
import type { SeriesPackedbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Packedbubble series
 */
declare const Packedbubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PackedbubbleSeriesProps): React.JSX.Element;
    type: string;
};
interface PackedbubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPackedbubbleOptions>;
}
export default Packedbubble;
