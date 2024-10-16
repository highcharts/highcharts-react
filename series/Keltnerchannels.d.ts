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
import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Keltnerchannels series
 */
declare const Keltnerchannels: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: KeltnerchannelsSeriesProps): React.JSX.Element;
    type: string;
};
interface KeltnerchannelsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesKeltnerchannelsOptions>;
}
export default Keltnerchannels;
