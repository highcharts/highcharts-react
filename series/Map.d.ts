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
import type { SeriesMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Map series
 */
declare const Map: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MapSeriesProps): React.JSX.Element;
    type: string;
};
interface MapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapOptions>;
}
export default Map;
