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
import type { SeriesTreegraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation. The best examples of
 * the dataStructures, which best reflect this chart are e.g. genealogy tree or
 * directory structure.
 *
 * A ready-made chart with `chart.type` set to `treegraph`. Declare the data
 * with `<Treegraph.Series>`, or use `TreegraphSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Treegraph>
 *   <Treegraph.Series data={[1, 2, 3]} />
 * </Treegraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.treegraph
 */
declare function Treegraph(props: ICommonAttributes): React.JSX.Element;
declare namespace Treegraph {
    export { TreegraphSeries as Series };
    export var type: string;
}
type SeriesTreegraphConfig = Omit<SeriesTreegraphOptions, "type">;
/** Props for the `<TreegraphSeries />` component. */
export interface TreegraphSeriesProps {
    id?: SeriesTreegraphConfig["id"];
    index?: SeriesTreegraphConfig["index"];
    name?: SeriesTreegraphConfig["name"];
    className?: SeriesTreegraphConfig["className"];
    color?: SeriesTreegraphConfig["color"];
    events?: SeriesTreegraphConfig["events"];
    data?: SeriesTreegraphConfig["data"];
    options?: SeriesTreegraphConfig;
}
/**
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation. The best examples of
 * the dataStructures, which best reflect this chart are e.g. genealogy tree or
 * directory structure.
 *
 * Renders the `treegraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TreegraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.treegraph
 */
export declare function TreegraphSeries(_props: TreegraphSeriesProps): any;
export declare namespace TreegraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treegraph;
