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
import type { SeriesVbpOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Volume By Price indicator.
 *
 * A ready-made chart with `chart.type` set to `vbp`. Declare the data with
 * `<VBP.Series>`, or use `VBPSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <VBP>
 *   <VBP.Series options={{ linkedTo: 'prices' }} />
 * </VBP>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.vbp
 */
declare function VBP(props: ICommonAttributes): React.JSX.Element;
declare namespace VBP {
    export { VBPSeries as Series };
    export var type: string;
}
type SeriesVbpConfig = Omit<SeriesVbpOptions, "type">;
/** Props for the `<VBPSeries />` component. */
export interface VBPSeriesProps {
    id?: SeriesVbpConfig["id"];
    index?: SeriesVbpConfig["index"];
    name?: SeriesVbpConfig["name"];
    className?: SeriesVbpConfig["className"];
    color?: SeriesVbpConfig["color"];
    events?: SeriesVbpConfig["events"];
    options?: SeriesVbpConfig;
}
/**
 * Volume By Price indicator.
 *
 * Renders the `vbp` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <VBPSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.vbp
 */
export declare function VBPSeries(_props: VBPSeriesProps): any;
export declare namespace VBPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VBP;
