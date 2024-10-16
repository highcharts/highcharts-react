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
import type { SeriesPpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ppo series
 */
declare const Ppo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PpoSeriesProps): React.JSX.Element;
    type: string;
};
interface PpoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPpoOptions>;
}
export default Ppo;
