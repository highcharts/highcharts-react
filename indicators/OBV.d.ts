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
import type { SeriesObvOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * OBV series
 */
declare const OBV: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OBVSeries;
    type: string;
};
type SeriesObvConfig = Omit<SeriesObvOptions, "type">;
export interface OBVSeriesProps {
    id?: SeriesObvConfig["id"];
    index?: SeriesObvConfig["index"];
    name?: SeriesObvConfig["name"];
    className?: SeriesObvConfig["className"];
    color?: SeriesObvConfig["color"];
    events?: SeriesObvConfig["events"];
    options?: SeriesObvConfig;
}
export declare function OBVSeries(_props: OBVSeriesProps): any;
export declare namespace OBVSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default OBV;
