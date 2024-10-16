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
import type { SeriesCmoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cmo series
 */
declare const Cmo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: CmoSeriesProps): React.JSX.Element;
    type: string;
};
interface CmoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCmoOptions>;
}
export default Cmo;
