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
import type { SeriesHlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * An HLC chart is a style of financial chart used to describe price movements
 * over time. It displays high, low and close values per data point.
 *
 * A ready-made chart with `chart.type` set to `hlc`. Declare the data with
 * `<HLC.Series>`, or use `HLCSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HLC>
 *   <HLC.Series data={[1, 2, 3]} />
 * </HLC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.hlc
 */
declare function HLC(props: ICommonAttributes): React.JSX.Element;
declare namespace HLC {
    export { HLCSeries as Series };
    export var type: string;
}
type SeriesHlcConfig = Omit<SeriesHlcOptions, "type">;
/** Props for the `<HLCSeries />` component. */
export interface HLCSeriesProps {
    id?: SeriesHlcConfig["id"];
    index?: SeriesHlcConfig["index"];
    name?: SeriesHlcConfig["name"];
    className?: SeriesHlcConfig["className"];
    color?: SeriesHlcConfig["color"];
    events?: SeriesHlcConfig["events"];
    data?: SeriesHlcConfig["data"];
    options?: SeriesHlcConfig;
}
/**
 * An HLC chart is a style of financial chart used to describe price movements
 * over time. It displays high, low and close values per data point.
 *
 * Renders the `hlc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HLCSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.hlc
 */
export declare function HLCSeries(_props: HLCSeriesProps): any;
export declare namespace HLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HLC;
