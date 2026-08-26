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
import type { SeriesFlagsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Flags are used to mark events in stock charts. They can be added on the
 * timeline, or attached to a specific series.
 *
 * A ready-made chart with `chart.type` set to `flags`. Declare the data with
 * `<Flags.Series>`, or use `FlagsSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Flags>
 *   <Flags.Series data={[1, 2, 3]} />
 * </Flags>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.flags
 */
declare function Flags(props: ICommonAttributes): React.JSX.Element;
declare namespace Flags {
    export { FlagsSeries as Series };
    export var type: string;
}
type SeriesFlagsConfig = Omit<SeriesFlagsOptions, "type">;
/** Props for the `<FlagsSeries />` component. */
export interface FlagsSeriesProps {
    id?: SeriesFlagsConfig["id"];
    index?: SeriesFlagsConfig["index"];
    name?: SeriesFlagsConfig["name"];
    className?: SeriesFlagsConfig["className"];
    color?: SeriesFlagsConfig["color"];
    events?: SeriesFlagsConfig["events"];
    data?: SeriesFlagsConfig["data"];
    options?: SeriesFlagsConfig;
}
/**
 * Flags are used to mark events in stock charts. They can be added on the
 * timeline, or attached to a specific series.
 *
 * Renders the `flags` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <FlagsSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.flags
 */
export declare function FlagsSeries(_props: FlagsSeriesProps): any;
export declare namespace FlagsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Flags;
