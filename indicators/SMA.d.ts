/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesSmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * SMA series
 */
declare const SMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SMASeries;
    type: string;
};
type SeriesSmaConfig = Omit<SeriesSmaOptions, "type">;
export interface SMASeriesProps {
    id?: SeriesSmaConfig["id"];
    index?: SeriesSmaConfig["index"];
    name?: SeriesSmaConfig["name"];
    className?: SeriesSmaConfig["className"];
    color?: SeriesSmaConfig["color"];
    events?: SeriesSmaConfig["events"];
    options?: SeriesSmaConfig;
}
export declare function SMASeries(_props: SMASeriesProps): any;
export declare namespace SMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SMA;
