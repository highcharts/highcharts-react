/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesTreemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Treemap series
 */
declare const Treemap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreemapSeries;
    type: string;
};
export interface TreemapSeriesProps {
    type?: "treemap";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesTreemapOptions, "type">;
}
export declare function TreemapSeries(_props: TreemapSeriesProps): any;
export declare namespace TreemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treemap;
