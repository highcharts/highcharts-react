/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
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
    Series: typeof PriceenvelopesSeries;
    type: string;
};
interface PriceenvelopesSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPriceenvelopesOptions>;
    children?: React.ReactNode;
}
export declare function PriceenvelopesSeries(_props: PriceenvelopesSeriesProps): any;
export declare namespace PriceenvelopesSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Priceenvelopes;
