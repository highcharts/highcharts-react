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
import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Polygon series
 */
declare const Polygon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PolygonSeriesProps): React.JSX.Element;
    type: string;
};
interface PolygonSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPolygonOptions>;
}
export default Polygon;
