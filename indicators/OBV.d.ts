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
import type { SeriesObvOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * On-Balance Volume (OBV) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file. Through the `volumeSeriesID` there
 * also should be linked the volume series.
 *
 * A ready-made chart with `chart.type` set to `obv`. Declare the data with
 * `<OBV.Series>`, or use `OBVSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <OBV>
 *   <OBV.Series options={{ linkedTo: 'prices' }} />
 * </OBV>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.obv
 */
declare function OBV(props: ICommonAttributes): React.JSX.Element;
declare namespace OBV {
    export { OBVSeries as Series };
    export var type: string;
}
type SeriesObvConfig = Omit<SeriesObvOptions, "type">;
/** Props for the `<OBVSeries />` component. */
export interface OBVSeriesProps {
    id?: SeriesObvConfig["id"];
    index?: SeriesObvConfig["index"];
    name?: SeriesObvConfig["name"];
    className?: SeriesObvConfig["className"];
    color?: SeriesObvConfig["color"];
    events?: SeriesObvConfig["events"];
    options?: SeriesObvConfig;
}
/**
 * On-Balance Volume (OBV) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file. Through the `volumeSeriesID` there
 * also should be linked the volume series.
 *
 * Renders the `obv` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <OBVSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.obv
 */
export declare function OBVSeries(_props: OBVSeriesProps): any;
export declare namespace OBVSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default OBV;
