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
import type { SeriesTemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * TEMA series
 */
declare const TEMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TEMASeries;
    type: string;
};
type SeriesTemaConfig = Omit<SeriesTemaOptions, "type">;
export interface TEMASeriesProps {
    id?: SeriesTemaConfig["id"];
    index?: SeriesTemaConfig["index"];
    name?: SeriesTemaConfig["name"];
    className?: SeriesTemaConfig["className"];
    color?: SeriesTemaConfig["color"];
    events?: SeriesTemaConfig["events"];
    options?: SeriesTemaConfig;
}
export declare function TEMASeries(_props: TEMASeriesProps): any;
export declare namespace TEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TEMA;
