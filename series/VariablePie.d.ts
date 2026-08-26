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
import type { SeriesVariablepieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A variable pie series is a two dimensional series type, where each point
 * renders an Y and Z value. Each point is drawn as a pie slice where the size
 * (arc) of the slice relates to the Y value and the radius of pie slice
 * relates to the Z value.
 *
 * A ready-made chart with `chart.type` set to `variablepie`. Declare the data
 * with `<VariablePie.Series>`, or use `VariablePieSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <VariablePie>
 *   <VariablePie.Series data={[1, 2, 3]} />
 * </VariablePie>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.variablepie
 */
declare function VariablePie(props: ICommonAttributes): React.JSX.Element;
declare namespace VariablePie {
    export { VariablePieSeries as Series };
    export var type: string;
}
type SeriesVariablepieConfig = Omit<SeriesVariablepieOptions, "type">;
/** Props for the `<VariablePieSeries />` component. */
export interface VariablePieSeriesProps {
    id?: SeriesVariablepieConfig["id"];
    index?: SeriesVariablepieConfig["index"];
    name?: SeriesVariablepieConfig["name"];
    className?: SeriesVariablepieConfig["className"];
    color?: SeriesVariablepieConfig["color"];
    events?: SeriesVariablepieConfig["events"];
    data?: SeriesVariablepieConfig["data"];
    options?: SeriesVariablepieConfig;
}
/**
 * A variable pie series is a two dimensional series type, where each point
 * renders an Y and Z value. Each point is drawn as a pie slice where the size
 * (arc) of the slice relates to the Y value and the radius of pie slice
 * relates to the Z value.
 *
 * Renders the `variablepie` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <VariablePieSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.variablepie
 */
export declare function VariablePieSeries(_props: VariablePieSeriesProps): any;
export declare namespace VariablePieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VariablePie;
