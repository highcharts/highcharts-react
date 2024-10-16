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
import type { SeriesHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Heatmap series
 */
declare const Heatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: HeatmapSeriesProps): React.JSX.Element;
    type: string;
};
interface HeatmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHeatmapOptions>;
}
export default Heatmap;
