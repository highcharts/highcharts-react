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
import type { SeriesCmfOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Chaikin Money Flow indicator (cmf).
 *
 * A ready-made chart with `chart.type` set to `cmf`. Declare the data with
 * `<CMF.Series>`, or use `CMFSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <CMF>
 *   <CMF.Series options={{ linkedTo: 'prices' }} />
 * </CMF>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.cmf
 */
declare function CMF(props: ICommonAttributes): React.JSX.Element;
declare namespace CMF {
    export { CMFSeries as Series };
    export var type: string;
}
type SeriesCmfConfig = Omit<SeriesCmfOptions, "type">;
/** Props for the `<CMFSeries />` component. */
export interface CMFSeriesProps {
    id?: SeriesCmfConfig["id"];
    index?: SeriesCmfConfig["index"];
    name?: SeriesCmfConfig["name"];
    className?: SeriesCmfConfig["className"];
    color?: SeriesCmfConfig["color"];
    events?: SeriesCmfConfig["events"];
    options?: SeriesCmfConfig;
}
/**
 * Chaikin Money Flow indicator (cmf).
 *
 * Renders the `cmf` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CMFSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.cmf
 */
export declare function CMFSeries(_props: CMFSeriesProps): any;
export declare namespace CMFSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CMF;
