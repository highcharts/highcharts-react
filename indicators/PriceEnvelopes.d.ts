/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesPriceEnvelopesOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PriceEnvelopes series
 */
declare const PriceEnvelopes: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PriceEnvelopesSeries;
    type: string;
};
interface PriceEnvelopesSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPriceEnvelopesOptions>;
    children?: React.ReactNode;
}
export declare function PriceEnvelopesSeries(_props: PriceEnvelopesSeriesProps): any;
export declare namespace PriceEnvelopesSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PriceEnvelopes;
