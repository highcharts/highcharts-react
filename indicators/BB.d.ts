/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import React from "react";
import type { SeriesBbOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Bollinger bands (BB). This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `bb`. Declare the data with
 * `<BB.Series>`, or use `BBSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import BB from '@highcharts/react/indicators/BB';
 *
 * <BB>
 *   <BB.Series options={{ linkedTo: 'prices' }} />
 * </BB>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.bb
 */
declare function BB(props: ICommonAttributes): React.JSX.Element;
declare namespace BB {
    export { BBSeries as Series };
    export var type: string;
}
type SeriesBbConfig = Omit<SeriesBbOptions, "type">;
/** Props for the `<BBSeries />` component. */
export interface BBSeriesProps {
    id?: SeriesBbConfig["id"];
    index?: SeriesBbConfig["index"];
    name?: SeriesBbConfig["name"];
    className?: SeriesBbConfig["className"];
    color?: SeriesBbConfig["color"];
    events?: SeriesBbConfig["events"];
    options?: SeriesBbConfig;
}
/**
 * Bollinger bands (BB). This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `bb` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { BBSeries } from '@highcharts/react/indicators/BB';
 *
 * <StockChart>
 *   <BBSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.bb
 */
export declare function BBSeries(_props: BBSeriesProps): any;
export declare namespace BBSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BB;
