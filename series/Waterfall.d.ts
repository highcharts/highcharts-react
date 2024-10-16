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
import type { SeriesWaterfallOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Waterfall series
 */
declare const Waterfall: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: WaterfallSeriesProps): React.JSX.Element;
    type: string;
};
interface WaterfallSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWaterfallOptions>;
}
export default Waterfall;
