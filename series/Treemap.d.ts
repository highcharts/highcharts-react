/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function TreemapSeries(_props: TreemapSeriesProps): any;
export declare namespace TreemapSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Treemap;
