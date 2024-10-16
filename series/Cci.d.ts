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
import type { SeriesCciOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cci series
 */
declare const Cci: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: CciSeriesProps): React.JSX.Element;
    type: string;
};
interface CciSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCciOptions>;
}
export default Cci;
