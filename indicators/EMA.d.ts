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
import type { SeriesEmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * EMA series
 */
declare const EMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof EMASeries;
    type: string;
};
type SeriesEmaConfig = Omit<SeriesEmaOptions, "type">;
export interface EMASeriesProps {
    id?: SeriesEmaConfig["id"];
    index?: SeriesEmaConfig["index"];
    name?: SeriesEmaConfig["name"];
    className?: SeriesEmaConfig["className"];
    color?: SeriesEmaConfig["color"];
    events?: SeriesEmaConfig["events"];
    options?: SeriesEmaConfig;
}
export declare function EMASeries(_props: EMASeriesProps): any;
export declare namespace EMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default EMA;
