/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesPriceEnvelopesOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PriceEnvelopes series
 */
declare const PriceEnvelopes: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PriceEnvelopesSeries;
    type: string;
};
export interface PriceEnvelopesSeriesProps {
    type?: "priceenvelopes";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPriceEnvelopesOptions, "type">;
}
export declare function PriceEnvelopesSeries(_props: PriceEnvelopesSeriesProps): any;
export declare namespace PriceEnvelopesSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PriceEnvelopes;
