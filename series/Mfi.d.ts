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
import type { SeriesMfiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mfi series
 */
declare const Mfi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MfiSeriesProps): React.JSX.Element;
    type: string;
};
interface MfiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMfiOptions>;
}
export default Mfi;
