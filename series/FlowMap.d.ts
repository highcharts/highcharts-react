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
import type { SeriesFlowmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A flowmap series is a series laid out on top of a map series allowing to
 * display route paths (e.g. flight or ship routes) or flows on a map. It
 * creates a link between two points on a map chart.
 *
 * A ready-made chart with `chart.type` set to `flowmap`. Declare the data with
 * `<FlowMap.Series>`, or use `FlowMapSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <FlowMap>
 *   <FlowMap.Series data={[1, 2, 3]} />
 * </FlowMap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.flowmap
 */
declare function FlowMap(props: ICommonAttributes): React.JSX.Element;
declare namespace FlowMap {
    export { FlowMapSeries as Series };
    export var type: string;
}
type SeriesFlowmapConfig = Omit<SeriesFlowmapOptions, "type">;
/** Props for the `<FlowMapSeries />` component. */
export interface FlowMapSeriesProps {
    id?: SeriesFlowmapConfig["id"];
    index?: SeriesFlowmapConfig["index"];
    name?: SeriesFlowmapConfig["name"];
    className?: SeriesFlowmapConfig["className"];
    color?: SeriesFlowmapConfig["color"];
    events?: SeriesFlowmapConfig["events"];
    data?: SeriesFlowmapConfig["data"];
    options?: SeriesFlowmapConfig;
}
/**
 * A flowmap series is a series laid out on top of a map series allowing to
 * display route paths (e.g. flight or ship routes) or flows on a map. It
 * creates a link between two points on a map chart.
 *
 * Renders the `flowmap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <FlowMapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.flowmap
 */
export declare function FlowMapSeries(_props: FlowMapSeriesProps): any;
export declare namespace FlowMapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default FlowMap;
