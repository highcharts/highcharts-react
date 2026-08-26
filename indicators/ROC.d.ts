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
import type { SeriesRocOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Rate of change indicator (ROC). The indicator value for each point is
 * defined as:
 *
 * A ready-made chart with `chart.type` set to `roc`. Declare the data with
 * `<ROC.Series>`, or use `ROCSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <ROC>
 *   <ROC.Series options={{ linkedTo: 'prices' }} />
 * </ROC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.roc
 */
declare function ROC(props: ICommonAttributes): React.JSX.Element;
declare namespace ROC {
    export { ROCSeries as Series };
    export var type: string;
}
type SeriesRocConfig = Omit<SeriesRocOptions, "type">;
/** Props for the `<ROCSeries />` component. */
export interface ROCSeriesProps {
    id?: SeriesRocConfig["id"];
    index?: SeriesRocConfig["index"];
    name?: SeriesRocConfig["name"];
    className?: SeriesRocConfig["className"];
    color?: SeriesRocConfig["color"];
    events?: SeriesRocConfig["events"];
    options?: SeriesRocConfig;
}
/**
 * Rate of change indicator (ROC). The indicator value for each point is
 * defined as:
 *
 * Renders the `roc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ROCSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.roc
 */
export declare function ROCSeries(_props: ROCSeriesProps): any;
export declare namespace ROCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ROC;
