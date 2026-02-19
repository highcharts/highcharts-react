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
import type { SeriesItemOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Item series
 */
declare const Item: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ItemSeries;
    type: string;
};
export interface ItemSeriesProps {
    type?: "item";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesItemOptions, "type">;
}
export declare function ItemSeries(_props: ItemSeriesProps): any;
export declare namespace ItemSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Item;
