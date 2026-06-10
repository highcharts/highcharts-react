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
import type { SeriesRocOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * ROC series
 */
declare const ROC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ROCSeries;
    type: string;
};
type SeriesRocConfig = Omit<SeriesRocOptions, "type">;
export interface ROCSeriesProps {
    id?: SeriesRocConfig["id"];
    index?: SeriesRocConfig["index"];
    name?: SeriesRocConfig["name"];
    className?: SeriesRocConfig["className"];
    color?: SeriesRocConfig["color"];
    events?: SeriesRocConfig["events"];
    options?: SeriesRocConfig;
}
export declare function ROCSeries(_props: ROCSeriesProps): any;
export declare namespace ROCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ROC;
