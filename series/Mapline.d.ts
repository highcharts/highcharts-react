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
import type { SeriesMaplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mapline series
 */
declare const Mapline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MaplineSeriesProps): React.JSX.Element;
    type: string;
};
interface MaplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMaplineOptions>;
}
export default Mapline;
