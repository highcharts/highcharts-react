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
import type { SeriesFunnelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Funnel charts are a type of chart often used to visualize stages in a sales
 * project, where the top are the initial stages with the most clients. It
 * requires that the modules/funnel.js file is loaded.
 *
 * A ready-made chart with `chart.type` set to `funnel`. Declare the data with
 * `<Funnel.Series>`, or use `FunnelSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Funnel>
 *   <Funnel.Series data={[1, 2, 3]} />
 * </Funnel>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.funnel
 */
declare function Funnel(props: ICommonAttributes): React.JSX.Element;
declare namespace Funnel {
    export { FunnelSeries as Series };
    export var type: string;
}
type SeriesFunnelConfig = Omit<SeriesFunnelOptions, "type">;
/** Props for the `<FunnelSeries />` component. */
export interface FunnelSeriesProps {
    id?: SeriesFunnelConfig["id"];
    index?: SeriesFunnelConfig["index"];
    name?: SeriesFunnelConfig["name"];
    className?: SeriesFunnelConfig["className"];
    color?: SeriesFunnelConfig["color"];
    events?: SeriesFunnelConfig["events"];
    data?: SeriesFunnelConfig["data"];
    options?: SeriesFunnelConfig;
}
/**
 * Funnel charts are a type of chart often used to visualize stages in a sales
 * project, where the top are the initial stages with the most clients. It
 * requires that the modules/funnel.js file is loaded.
 *
 * Renders the `funnel` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <FunnelSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.funnel
 */
export declare function FunnelSeries(_props: FunnelSeriesProps): any;
export declare namespace FunnelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel;
