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
import type { SeriesRenkoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A Renko series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * A ready-made chart with `chart.type` set to `renko`. Declare the data with
 * `<Renko.Series>`, or use `RenkoSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Renko>
 *   <Renko.Series data={[1, 2, 3]} />
 * </Renko>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.renko
 */
declare function Renko(props: ICommonAttributes): React.JSX.Element;
declare namespace Renko {
    export { RenkoSeries as Series };
    export var type: string;
}
type SeriesRenkoConfig = Omit<SeriesRenkoOptions, "type">;
/** Props for the `<RenkoSeries />` component. */
export interface RenkoSeriesProps {
    id?: SeriesRenkoConfig["id"];
    index?: SeriesRenkoConfig["index"];
    name?: SeriesRenkoConfig["name"];
    className?: SeriesRenkoConfig["className"];
    color?: SeriesRenkoConfig["color"];
    events?: SeriesRenkoConfig["events"];
    data?: SeriesRenkoConfig["data"];
    options?: SeriesRenkoConfig;
}
/**
 * A Renko series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * Renders the `renko` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <RenkoSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.renko
 */
export declare function RenkoSeries(_props: RenkoSeriesProps): any;
export declare namespace RenkoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Renko;
