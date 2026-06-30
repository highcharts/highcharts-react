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
import type { SeriesTrixOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * TRIX series
 */
declare const TRIX: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TRIXSeries;
    type: string;
};
type SeriesTrixConfig = Omit<SeriesTrixOptions, "type">;
export interface TRIXSeriesProps {
    id?: SeriesTrixConfig["id"];
    index?: SeriesTrixConfig["index"];
    name?: SeriesTrixConfig["name"];
    className?: SeriesTrixConfig["className"];
    color?: SeriesTrixConfig["color"];
    events?: SeriesTrixConfig["events"];
    options?: SeriesTrixConfig;
}
export declare function TRIXSeries(_props: TRIXSeriesProps): any;
export declare namespace TRIXSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TRIX;
