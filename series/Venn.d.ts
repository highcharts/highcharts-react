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
import type { SeriesVennOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A Venn diagram displays all possible logical relations between a collection
 * of different sets. The sets are represented by circles, and the relation
 * between the sets are displayed by the overlap or lack of overlap between
 * them. The venn diagram is a special case of Euler diagrams, which can also
 * be displayed by this series type.
 *
 * A ready-made chart with `chart.type` set to `venn`. Declare the data with
 * `<Venn.Series>`, or use `VennSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Venn>
 *   <Venn.Series data={[1, 2, 3]} />
 * </Venn>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.venn
 */
declare function Venn(props: ICommonAttributes): React.JSX.Element;
declare namespace Venn {
    export { VennSeries as Series };
    export var type: string;
}
type SeriesVennConfig = Omit<SeriesVennOptions, "type">;
/** Props for the `<VennSeries />` component. */
export interface VennSeriesProps {
    id?: SeriesVennConfig["id"];
    index?: SeriesVennConfig["index"];
    name?: SeriesVennConfig["name"];
    className?: SeriesVennConfig["className"];
    color?: SeriesVennConfig["color"];
    events?: SeriesVennConfig["events"];
    data?: SeriesVennConfig["data"];
    options?: SeriesVennConfig;
}
/**
 * A Venn diagram displays all possible logical relations between a collection
 * of different sets. The sets are represented by circles, and the relation
 * between the sets are displayed by the overlap or lack of overlap between
 * them. The venn diagram is a special case of Euler diagrams, which can also
 * be displayed by this series type.
 *
 * Renders the `venn` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <VennSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.venn
 */
export declare function VennSeries(_props: VennSeriesProps): any;
export declare namespace VennSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Venn;
