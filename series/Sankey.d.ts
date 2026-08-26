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
import type { SeriesSankeyOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A sankey diagram is a type of flow diagram, in which the width of the link
 * between two nodes is shown proportionally to the flow quantity.
 *
 * A ready-made chart with `chart.type` set to `sankey`. Declare the data with
 * `<Sankey.Series>`, or use `SankeySeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Sankey>
 *   <Sankey.Series data={[1, 2, 3]} />
 * </Sankey>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.sankey
 */
declare function Sankey(props: ICommonAttributes): React.JSX.Element;
declare namespace Sankey {
    export { SankeySeries as Series };
    export var type: string;
}
type SeriesSankeyConfig = Omit<SeriesSankeyOptions, "type">;
/** Props for the `<SankeySeries />` component. */
export interface SankeySeriesProps {
    id?: SeriesSankeyConfig["id"];
    index?: SeriesSankeyConfig["index"];
    name?: SeriesSankeyConfig["name"];
    className?: SeriesSankeyConfig["className"];
    color?: SeriesSankeyConfig["color"];
    events?: SeriesSankeyConfig["events"];
    data?: SeriesSankeyConfig["data"];
    options?: SeriesSankeyConfig;
}
/**
 * A sankey diagram is a type of flow diagram, in which the width of the link
 * between two nodes is shown proportionally to the flow quantity.
 *
 * Renders the `sankey` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <SankeySeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.sankey
 */
export declare function SankeySeries(_props: SankeySeriesProps): any;
export declare namespace SankeySeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sankey;
