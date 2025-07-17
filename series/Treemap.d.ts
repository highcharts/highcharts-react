/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-07-17
 *
 */
import React from "react";
import type { SeriesTreemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Treemap series
 */
declare const Treemap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreemapSeries;
    type: string;
};
interface TreemapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTreemapOptions>;
    children?: React.ReactNode;
}
export declare function TreemapSeries(_props: TreemapSeriesProps): any;
export declare namespace TreemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Treemap;
