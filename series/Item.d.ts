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
import type { SeriesItemOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * An item chart is an infographic chart where a number of items are laid out
 * in either a rectangular or circular pattern. It can be used to visualize
 * counts within a group, or for the circular pattern, typically a parliament.
 *
 * A ready-made chart with `chart.type` set to `item`. Declare the data with
 * `<Item.Series>`, or use `ItemSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Item>
 *   <Item.Series data={[1, 2, 3]} />
 * </Item>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.item
 */
declare function Item(props: ICommonAttributes): React.JSX.Element;
declare namespace Item {
    export { ItemSeries as Series };
    export var type: string;
}
type SeriesItemConfig = Omit<SeriesItemOptions, "type">;
/** Props for the `<ItemSeries />` component. */
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
/**
 * An item chart is an infographic chart where a number of items are laid out
 * in either a rectangular or circular pattern. It can be used to visualize
 * counts within a group, or for the circular pattern, typically a parliament.
 *
 * Renders the `item` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ItemSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.item
 */
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
