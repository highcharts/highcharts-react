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
import type { SeriesVbpOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * VBP series
 */
declare const VBP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VBPSeries;
    type: string;
};
type SeriesVbpConfig = Omit<SeriesVbpOptions, "type">;
export interface VBPSeriesProps {
    id?: SeriesVbpConfig["id"];
    index?: SeriesVbpConfig["index"];
    name?: SeriesVbpConfig["name"];
    className?: SeriesVbpConfig["className"];
    color?: SeriesVbpConfig["color"];
    events?: SeriesVbpConfig["events"];
    options?: SeriesVbpConfig;
}
export declare function VBPSeries(_props: VBPSeriesProps): any;
export declare namespace VBPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VBP;
