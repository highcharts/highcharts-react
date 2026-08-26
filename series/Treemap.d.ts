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
import type { SeriesTreemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A treemap displays hierarchical data using nested rectangles. The data can
 * be laid out in varying ways depending on options.
 *
 * A ready-made chart with `chart.type` set to `treemap`. Declare the data with
 * `<Treemap.Series>`, or use `TreemapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Treemap>
 *   <Treemap.Series data={[1, 2, 3]} />
 * </Treemap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.treemap
 */
declare function Treemap(props: ICommonAttributes): React.JSX.Element;
declare namespace Treemap {
    export { TreemapSeries as Series };
    export var type: string;
}
type SeriesTreemapConfig = Omit<SeriesTreemapOptions, "type">;
/** Props for the `<TreemapSeries />` component. */
export interface TreemapSeriesProps {
    id?: SeriesTreemapConfig["id"];
    index?: SeriesTreemapConfig["index"];
    name?: SeriesTreemapConfig["name"];
    className?: SeriesTreemapConfig["className"];
    color?: SeriesTreemapConfig["color"];
    events?: SeriesTreemapConfig["events"];
    data?: SeriesTreemapConfig["data"];
    options?: SeriesTreemapConfig;
}
/**
 * A treemap displays hierarchical data using nested rectangles. The data can
 * be laid out in varying ways depending on options.
 *
 * Renders the `treemap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TreemapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.treemap
 */
export declare function TreemapSeries(_props: TreemapSeriesProps): any;
export declare namespace TreemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treemap;
