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
import type { SeriesPriceenvelopesOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Priceenvelopes series
 */
declare const Priceenvelopes: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PriceenvelopesSeriesProps): React.JSX.Element;
    type: string;
};
interface PriceenvelopesSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPriceenvelopesOptions>;
}
export default Priceenvelopes;
