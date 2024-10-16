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
import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Streamgraph series
 */
declare const Streamgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: StreamgraphSeriesProps): React.JSX.Element;
    type: string;
};
interface StreamgraphSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesStreamgraphOptions>;
}
export default Streamgraph;
