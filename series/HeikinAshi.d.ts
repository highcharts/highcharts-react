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
import type { SeriesHeikinashiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * An HeikinAshi series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * A ready-made chart with `chart.type` set to `heikinashi`. Declare the data
 * with `<HeikinAshi.Series>`, or use `HeikinAshiSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HeikinAshi>
 *   <HeikinAshi.Series data={[1, 2, 3]} />
 * </HeikinAshi>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.heikinashi
 */
declare function HeikinAshi(props: ICommonAttributes): React.JSX.Element;
declare namespace HeikinAshi {
    export { HeikinAshiSeries as Series };
    export var type: string;
}
type SeriesHeikinashiConfig = Omit<SeriesHeikinashiOptions, "type">;
/** Props for the `<HeikinAshiSeries />` component. */
export interface HeikinAshiSeriesProps {
    id?: SeriesHeikinashiConfig["id"];
    index?: SeriesHeikinashiConfig["index"];
    name?: SeriesHeikinashiConfig["name"];
    className?: SeriesHeikinashiConfig["className"];
    color?: SeriesHeikinashiConfig["color"];
    events?: SeriesHeikinashiConfig["events"];
    data?: SeriesHeikinashiConfig["data"];
    options?: SeriesHeikinashiConfig;
}
/**
 * An HeikinAshi series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * Renders the `heikinashi` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HeikinAshiSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.heikinashi
 */
export declare function HeikinAshiSeries(_props: HeikinAshiSeriesProps): any;
export declare namespace HeikinAshiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HeikinAshi;
