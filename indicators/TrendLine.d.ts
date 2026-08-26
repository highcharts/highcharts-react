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
import type { SeriesTrendlineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Trendline (linear regression) fits a straight line to the selected data
 * using a method called the Sum Of Least Squares. This series requires the
 * `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `trendline`. Declare the data
 * with `<TrendLine.Series>`, or use `TrendLineSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <TrendLine>
 *   <TrendLine.Series options={{ linkedTo: 'prices' }} />
 * </TrendLine>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.trendline
 */
declare function TrendLine(props: ICommonAttributes): React.JSX.Element;
declare namespace TrendLine {
    export { TrendLineSeries as Series };
    export var type: string;
}
type SeriesTrendlineConfig = Omit<SeriesTrendlineOptions, "type">;
/** Props for the `<TrendLineSeries />` component. */
export interface TrendLineSeriesProps {
    id?: SeriesTrendlineConfig["id"];
    index?: SeriesTrendlineConfig["index"];
    name?: SeriesTrendlineConfig["name"];
    className?: SeriesTrendlineConfig["className"];
    color?: SeriesTrendlineConfig["color"];
    events?: SeriesTrendlineConfig["events"];
    options?: SeriesTrendlineConfig;
}
/**
 * Trendline (linear regression) fits a straight line to the selected data
 * using a method called the Sum Of Least Squares. This series requires the
 * `linkedTo` option to be set.
 *
 * Renders the `trendline` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <TrendLineSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.trendline
 */
export declare function TrendLineSeries(_props: TrendLineSeriesProps): any;
export declare namespace TrendLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TrendLine;
