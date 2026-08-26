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
import type { SeriesAdOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to be
 * set.
 *
 * A ready-made chart with `chart.type` set to `ad`. Declare the data with
 * `<AD.Series>`, or use `ADSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <AD>
 *   <AD.Series options={{ linkedTo: 'prices' }} />
 * </AD>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ad
 */
declare function AD(props: ICommonAttributes): React.JSX.Element;
declare namespace AD {
    export { ADSeries as Series };
    export var type: string;
}
type SeriesAdConfig = Omit<SeriesAdOptions, "type">;
/** Props for the `<ADSeries />` component. */
export interface ADSeriesProps {
    id?: SeriesAdConfig["id"];
    index?: SeriesAdConfig["index"];
    name?: SeriesAdConfig["name"];
    className?: SeriesAdConfig["className"];
    color?: SeriesAdConfig["color"];
    events?: SeriesAdConfig["events"];
    options?: SeriesAdConfig;
}
/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to be
 * set.
 *
 * Renders the `ad` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ADSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ad
 */
export declare function ADSeries(_props: ADSeriesProps): any;
export declare namespace ADSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AD;
