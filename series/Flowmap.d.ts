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
import type { SeriesFlowmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Flowmap series
 */
declare const Flowmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: FlowmapSeriesProps): React.JSX.Element;
    type: string;
};
interface FlowmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFlowmapOptions>;
}
export default Flowmap;
