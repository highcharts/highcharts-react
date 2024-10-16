/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React from "react";
import type { SeriesItemOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Item series
 */
declare const Item: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ItemSeriesProps): React.JSX.Element;
    type: string;
};
interface ItemSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesItemOptions>;
}
export default Item;
