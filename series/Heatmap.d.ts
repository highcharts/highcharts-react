/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A heatmap is a graphical representation of data where the individual values
 * contained in a matrix are represented as colors.
 *
 * A ready-made chart with `chart.type` set to `heatmap`. Declare the data with
 * `<Heatmap.Series>`, or use `HeatmapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Heatmap>
 *   <Heatmap.Series data={[1, 2, 3]} />
 * </Heatmap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.heatmap
 */
declare function Heatmap(props: ICommonAttributes): React.JSX.Element;
declare namespace Heatmap {
    export { HeatmapSeries as Series };
    export var type: string;
}
type SeriesHeatmapConfig = Omit<SeriesHeatmapOptions, "type">;
/** Props for the `<HeatmapSeries />` component. */
export interface HeatmapSeriesProps {
    id?: SeriesHeatmapConfig["id"];
    index?: SeriesHeatmapConfig["index"];
    name?: SeriesHeatmapConfig["name"];
    className?: SeriesHeatmapConfig["className"];
    color?: SeriesHeatmapConfig["color"];
    events?: SeriesHeatmapConfig["events"];
    data?: SeriesHeatmapConfig["data"];
    options?: SeriesHeatmapConfig;
}
/**
 * A heatmap is a graphical representation of data where the individual values
 * contained in a matrix are represented as colors.
 *
 * Renders the `heatmap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <HeatmapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.heatmap
 */
export declare function HeatmapSeries(_props: HeatmapSeriesProps): any;
export declare namespace HeatmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Heatmap;
