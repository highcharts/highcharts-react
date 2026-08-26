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
import type { SeriesIkhOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `ikh`. Declare the data with
 * `<IKH.Series>`, or use `IKHSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <IKH>
 *   <IKH.Series options={{ linkedTo: 'prices' }} />
 * </IKH>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ikh
 */
declare function IKH(props: ICommonAttributes): React.JSX.Element;
declare namespace IKH {
    export { IKHSeries as Series };
    export var type: string;
}
type SeriesIkhConfig = Omit<SeriesIkhOptions, "type">;
/** Props for the `<IKHSeries />` component. */
export interface IKHSeriesProps {
    id?: SeriesIkhConfig["id"];
    index?: SeriesIkhConfig["index"];
    name?: SeriesIkhConfig["name"];
    className?: SeriesIkhConfig["className"];
    color?: SeriesIkhConfig["color"];
    events?: SeriesIkhConfig["events"];
    options?: SeriesIkhConfig;
}
/**
 * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be set.
 *
 * Renders the `ikh` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <IKHSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ikh
 */
export declare function IKHSeries(_props: IKHSeriesProps): any;
export declare namespace IKHSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default IKH;
