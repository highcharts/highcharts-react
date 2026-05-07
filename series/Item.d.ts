/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
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
type SeriesItemConfig = Omit<SeriesItemOptions, "type">;
export interface ItemSeriesProps {
    id?: SeriesItemConfig["id"];
    index?: SeriesItemConfig["index"];
    name?: SeriesItemConfig["name"];
    className?: SeriesItemConfig["className"];
    color?: SeriesItemConfig["color"];
    events?: SeriesItemConfig["events"];
    data?: SeriesItemConfig["data"];
    options?: SeriesItemConfig;
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
