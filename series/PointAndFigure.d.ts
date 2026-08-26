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
import type { SeriesPointandfigureOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The Point and Figure series represents changes in stock price movements,
 * without focusing on the time and volume. Each data point is created when the
 * `boxSize` criteria is met. Opposite column of points gets created only when
 * the `reversalAmount` threshold is met.
 *
 * A ready-made chart with `chart.type` set to `pointandfigure`. Declare the
 * data with `<PointAndFigure.Series>`, or use `PointAndFigureSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PointAndFigure>
 *   <PointAndFigure.Series data={[1, 2, 3]} />
 * </PointAndFigure>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pointandfigure
 */
declare function PointAndFigure(props: ICommonAttributes): React.JSX.Element;
declare namespace PointAndFigure {
    export { PointAndFigureSeries as Series };
    export var type: string;
}
type SeriesPointandfigureConfig = Omit<SeriesPointandfigureOptions, "type">;
/** Props for the `<PointAndFigureSeries />` component. */
export interface PointAndFigureSeriesProps {
    id?: SeriesPointandfigureConfig["id"];
    index?: SeriesPointandfigureConfig["index"];
    name?: SeriesPointandfigureConfig["name"];
    className?: SeriesPointandfigureConfig["className"];
    color?: SeriesPointandfigureConfig["color"];
    events?: SeriesPointandfigureConfig["events"];
    data?: SeriesPointandfigureConfig["data"];
    options?: SeriesPointandfigureConfig;
}
/**
 * The Point and Figure series represents changes in stock price movements,
 * without focusing on the time and volume. Each data point is created when the
 * `boxSize` criteria is met. Opposite column of points gets created only when
 * the `reversalAmount` threshold is met.
 *
 * Renders the `pointandfigure` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PointAndFigureSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pointandfigure
 */
export declare function PointAndFigureSeries(_props: PointAndFigureSeriesProps): any;
export declare namespace PointAndFigureSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PointAndFigure;
