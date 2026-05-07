/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesPcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * PC series
 */
declare const PC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PCSeries;
    type: string;
};
type SeriesPcConfig = Omit<SeriesPcOptions, "type">;
export interface PCSeriesProps {
    id?: SeriesPcConfig["id"];
    index?: SeriesPcConfig["index"];
    name?: SeriesPcConfig["name"];
    className?: SeriesPcConfig["className"];
    color?: SeriesPcConfig["color"];
    events?: SeriesPcConfig["events"];
    options?: SeriesPcConfig;
}
export declare function PCSeries(_props: PCSeriesProps): any;
export declare namespace PCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PC;
