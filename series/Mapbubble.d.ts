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
import type { SeriesMapbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mapbubble series
 */
declare const Mapbubble: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MapbubbleSeriesProps): React.JSX.Element;
    type: string;
};
interface MapbubbleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapbubbleOptions>;
}
export default Mapbubble;
