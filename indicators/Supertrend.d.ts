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
import type { SeriesSupertrendOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Supertrend series
 */
declare const Supertrend: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SupertrendSeries;
    type: string;
};
type SeriesSupertrendConfig = Omit<SeriesSupertrendOptions, "type">;
export interface SupertrendSeriesProps {
    id?: SeriesSupertrendConfig["id"];
    index?: SeriesSupertrendConfig["index"];
    name?: SeriesSupertrendConfig["name"];
    className?: SeriesSupertrendConfig["className"];
    color?: SeriesSupertrendConfig["color"];
    events?: SeriesSupertrendConfig["events"];
    options?: SeriesSupertrendConfig;
}
export declare function SupertrendSeries(_props: SupertrendSeriesProps): any;
export declare namespace SupertrendSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Supertrend;
