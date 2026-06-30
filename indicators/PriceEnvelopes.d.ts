/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesPriceenvelopesOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * PriceEnvelopes series
 */
declare const PriceEnvelopes: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PriceEnvelopesSeries;
    type: string;
};
type SeriesPriceenvelopesConfig = Omit<SeriesPriceenvelopesOptions, "type">;
export interface PriceEnvelopesSeriesProps {
    id?: SeriesPriceenvelopesConfig["id"];
    index?: SeriesPriceenvelopesConfig["index"];
    name?: SeriesPriceenvelopesConfig["name"];
    className?: SeriesPriceenvelopesConfig["className"];
    color?: SeriesPriceenvelopesConfig["color"];
    events?: SeriesPriceenvelopesConfig["events"];
    options?: SeriesPriceenvelopesConfig;
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
