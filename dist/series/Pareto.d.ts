/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-07
 *
 */
import React from "react";
import { ICommonAttributes, ICommonSeriesAttributes } from "../Highcharts";
/**
 * Pareto series
 */
declare const Pareto: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ICommonSeriesAttributes): React.JSX.Element;
    type: string;
};
export default Pareto;
